
import React from 'react';
import {Text, Button, StatusBar} from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';


import styles from './styles';

function AccountScreen() {
    //const { signOut } = React.useContext(AuthContext);
  
    return (
      

      <SafeAreaView 
      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#6a51ae' }}
      >
         <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <Text>AccountScreen Screen</Text>
      </SafeAreaView>
    );
  }


  export default AccountScreen;

  /*<Button title="Sign out" onPress={signOut} />*/