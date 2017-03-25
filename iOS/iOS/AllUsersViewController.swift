//
//  AllUsersViewController.swift
//  iOS
//
//  Created by Khaled AlObaid on 3/22/17.
//  Copyright © 2017 TripleAteam. All rights reserved.
//

import UIKit
import Firebase


class AllUsersViewController: UIViewController, UITableViewDataSource, UITableViewDelegate{
    
    var userList = [users]()
    var conversationList = [conversation]()
    var receiver = ""
    
    
    
    @IBOutlet weak var navBarTitle: UINavigationItem!
    @IBOutlet weak var userListTable: UITableView!
    @IBAction func didClickBack(_ sender: Any) {
        // sign out code from Firebase doc
        let firebaseAuth = FIRAuth.auth()
        do {
            try firebaseAuth?.signOut()
        } catch let signOutError as NSError {
            print ("Error signing out: %@", signOutError)
        }
        // return to sign in UI
        self.performSegue(withIdentifier: "signIn", sender: self)
    }

    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        updateNavTitle()
        fetchAllUsers()
        // Do any additional setup after loading the view.
    }
    
    func updateNavTitle(){
        let userID = FIRAuth.auth()?.currentUser?.uid
        FIRDatabase.database().reference().child("users").child(userID!).observeSingleEvent(of: .value, with: { (snapshot) in
            let snapshotValue = snapshot.value as? NSDictionary
            let uName = snapshotValue?["name"] as? String
            self.navBarTitle.title = "Welcome " + uName!
        })
    
    
    }
    
    func fetchAllUsers(){
        // fetch all users from Whisper Database
        let dataBaseRef = FIRDatabase.database().reference()
        
        dataBaseRef.child("users").queryOrderedByKey().observe(.childAdded , with: { (snapshot) in
            let snapshotValue = snapshot.value as? NSDictionary
            let userID = snapshot.key as? String
            let uName = snapshotValue?["name"] as? String
            let UImageUrl = snapshotValue?["image"] as? String
            let UEmail = snapshotValue?["email"] as? String
            let lastSeen = self.currentTimeStamp()
            self.userList.insert(users(userId: userID, name: uName, imageUrl: UImageUrl, email: UEmail,  timeStamp: lastSeen), at: 0)
            
            self.fetchLastMessageAndTimeStamp(userIdToFetchLastMessage : userID!)
            self.userListTable.reloadData()
        })
    }
    
    
    // this function should return data from child "conversation" in database as a string
    func fetchLastMessageAndTimeStamp(userIdToFetchLastMessage : String) -> String{
        
        return "test"
    
    }
    
    
    func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }

    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return userList.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = userListTable.dequeueReusableCell(withIdentifier: "userCell", for: indexPath)
        cell.textLabel?.text = userList[indexPath.row].name
        cell.detailTextLabel?.text = userList[indexPath.row].email
        return cell
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        receiver = userList[indexPath.row].userId
        performSegue(withIdentifier: "chat", sender: nil)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if (segue.identifier == "chat") {
            let dest = segue.destination as? ChatViewController
            dest?.receiver = self.receiver
        }
    }
    
}
