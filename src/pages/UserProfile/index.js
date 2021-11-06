import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { DMUser } from '../../assets';
import { Gap, Header, List, Profile } from '../../components';
import { colors, getData } from '../../utils';

const UserProfile = ({ navigation }) => {
  const [user, setUser] = useState({
    photo: '',
    fullName: '',
    profession: ''
  })
  useEffect(() => {
    getData('@user', 'object').then(res => {
      setUser(res)
    })
  }, [])
  return (
    <View style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile avatar={user.photo} name={user.fullName} role={user.profession} />
      <Gap height={14} />
      <List onPress={() => navigation.navigate("UpdateProfile")} icon="profile" name="Edit Profile" desc="Last updated yesterday" type="next" />
      <List icon="language" name="Language" desc="Available 12 languages" type="next" />
      <List icon="rate" name="Give Us Rate" desc="On Google Play Store" type="next" />
      <List icon="file" name="Help Center" desc="Read our guidelines" type="next" />
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
})
