package com.example.marik.whispermariya;

/**
 * Created by marik on 27/02/2017.
 */


import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import com.google.firebase.database.ChildEventListener;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ServerValue;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class Chat_room  extends AppCompatActivity{

    private Button btn_send_msg;
    private EditText input_msg;
    private TextView chat_conversation;
    private TextView timeStamp;

    private String user_name,room_name;
    private DatabaseReference chatReference;
    private String temp_key;
    private Object timeMes = ServerValue.TIMESTAMP;
    private String sender;
    private  String receiver;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.chat_room);

        btn_send_msg = (Button) findViewById(R.id.sendButton);
        input_msg = (EditText) findViewById(R.id.tvMessage);
        chat_conversation = (TextView) findViewById(R.id.tvChtMes);

        user_name = getIntent().getExtras().get("user_name").toString();
        room_name = getIntent().getExtras().get("room_name").toString();
        setTitle(room_name);

        chatReference = FirebaseDatabase.getInstance().getReference().child("messages").child(room_name);

        btn_send_msg.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Map<String,Object> map = new HashMap<String, Object>();
                temp_key = chatReference.push().getKey();
                chatReference.updateChildren(map);

                DatabaseReference message_root = chatReference.child(temp_key);
                Map<String,Object> map2 = new HashMap<String, Object>();
                map2.put("sender",user_name);
                map2.put("content",input_msg.getText().toString());
                map2.put("timestamp",timeMes);

                message_root.updateChildren(map2);
            }
        });

        chatReference.addChildEventListener(new ChildEventListener() {
            @Override
            public void onChildAdded(DataSnapshot dataSnapshot, String s) {

                append_chat_conversation(dataSnapshot);
            }

            @Override
            public void onChildChanged(DataSnapshot dataSnapshot, String s) {

            }

            @Override
            public void onChildRemoved(DataSnapshot dataSnapshot) {

            }

            @Override
            public void onChildMoved(DataSnapshot dataSnapshot, String s) {

            }

            @Override
            public void onCancelled(DatabaseError databaseError) {

            }
        });

    }
    /**/

    private String chat_msg,chat_user_name;
    private Object chat_message_time;

    private void append_chat_conversation(DataSnapshot dataSnapshot) {

        Iterator i = dataSnapshot.getChildren().iterator();

        while (i.hasNext()){

            chat_msg = (String) ((DataSnapshot)i.next()).getValue();
            chat_user_name = (String) ((DataSnapshot)i.next()).getValue();
            chat_message_time =  ((DataSnapshot)i.next()).getValue();

            chat_conversation.append(chat_user_name +" : "+ chat_msg + "\n"+ chat_message_time + "\n");
        }


    }


}



