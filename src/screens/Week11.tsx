import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import { gql } from '@apollo/client';

// const GET_USERS = gql`
//   query GetUsers {
//     users(options: { paginate: { page: 1, limit: 10 } }) {
//       data {
//         id
//         name
//         email
//       }
//     }
//   }
// `;
const Week11 = () => {
  //   const { loading, error, data } = useQuery(GET_USERS);

  //   if (loading) return <Text>Loading...</Text>;
  //   if (error) return <Text>Error: {error.message}</Text>;
  return (
    <Text>fgfdg</Text>
    // <FlatList
    //   data={data.users.data}
    //   keyExtractor={item => item.id.toString()}
    //   renderItem={({ item }) => (
    //     <View>
    //       <Text>{item.name}</Text>
    //       <Text>{item.email}</Text>
    //     </View>
    //   )}
    // />
  );
};

export default Week11;

const styles = StyleSheet.create({});
