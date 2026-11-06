import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Alert} from 'react-native';
import {ToastAndroid} from 'react-native';

//Create custom component InputBox for TextInputs with Labels
const InputBox = ({label, onChangeText, secureTextEntry = false}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                style={{borderWidth: 1}}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const MyApp = () => {
    // Declare variables
    //let pw = "";
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('Admin');

    return (
        <View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            {/* Ex1G: Create a TextInput labelled as "User Name". */}
            {/*<Text>User Name:</Text>*/}
            {/*<TextInput style={{borderWidth: 1}}*/}
            {/*           onChangeText={(text) => setName(text)} />*/}
            <InputBox label="User Name:" onChangeText={setName}/>

            {/* Ex1B: Add a Picker that is labelled "User Type:" with 2 options Admin and Guest. */}
            <Text>User Type:</Text>
            <Picker
                selectedValue={type}
                onValueChange={(value) => setType(value)}
                style={{backgroundColor: "grey"}}>
                <Picker.Item label='Admin' value='Admin'/>
                <Picker.Item label='Guest' value='Guest'/>
            </Picker>

            {/* Ex1A: Display the text "Password:" with a simple TextInput underneath */}
            {/*<Text>Password:</Text>*/}
            {/*<TextInput style={{borderWidth: 1}}*/}
            {/*           onChangeText={(text) => setPw(text)}*/}
            {/*           secureTextEntry={true}/>*/}
            <InputBox
                label="Password"
                onChangeText={(text) => setPw(text)}
                secureTextEntry={true}
            />

            {/* Ex1C: Add a Button with the title "LOG IN". */}
            {/* Ex1D: Display Alert message "Welcome!" when the LOG IN button pressed. */}
            <Button
                title="LOG IN"
                onPress={() => Alert.alert("Welcome!" + " " + name)}
            />

            <TouchableOpacity onPress={() => {
                const correctPassword = '123';
                let mymessage = 'Error! Wrong Password!';
                if (pw == correctPassword) {
                    mymessage = 'Welcome ' + type + ' ' + name;
                }
                ToastAndroid.show(mymessage, ToastAndroid.SHORT);
            }}>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                const correctPassword = '123';
                let mymessage = 'Error! Wrong Password!';

                if (pw == correctPassword) {
                    mymessage = 'Welcome ' + type + ' ' + name;
                }

                ToastAndroid.show(mymessage, ToastAndroid.SHORT);
            }}>
                <Text>I'm pressable!</Text>
            </TouchableOpacity>

            {/* Ex1E: Add TouchableOpacity labelled as "Alternative LOG IN" with Alert message "Hi hi!" */}
            {/* Ex1F: Change Alert message to Toast message */}
            <Text>Entered Password: {pw}</Text>

        </View>
    );
};

export default MyApp;