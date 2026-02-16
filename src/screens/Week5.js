import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../globalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskToList, toggleTask, removeTask } from '../redux/todoSlice';
import { FlatList, TextInput } from 'react-native-gesture-handler';

const Week5 = () => {
  const tasks = useSelector(state => state.todo.tasks);
  const dispatch = useDispatch();
  const [addTask, showAddTask] = useState(false);
  const [text, setText] = useState('');
  const [id, setId] = useState(0);

  useEffect(() => {
    console.log('New task: ', tasks);
  }, [tasks]);

  const newTask = () => {
    setId(prev => prev + 1);
    const task = {
      id: id,
      taskName: text,
      completed: false,
    };
    dispatch(addTaskToList(task));
    showAddTask(false);
    setText('');
  };
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.localContainer}>
        <Text style={globalStyles.headerTitle}>Todo App</Text>
        <TouchableOpacity
          style={{
            padding: '4%',
            marginTop: '6%',
            borderRadius: 10,
            backgroundColor: '#686de0',
          }}
          onPress={() => showAddTask(true)}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>
            + Add Task
          </Text>
        </TouchableOpacity>
        {addTask ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: '4%',
            }}
          >
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 10,
                paddingHorizontal: '4%',
                width: '58%',
              }}
              value={text}
              onChangeText={setText}
              placeholder="Enter the Task"
            />
            <TouchableOpacity
              style={{
                padding: '2%',
                borderRadius: 10,
                backgroundColor: '#6ab04c',
                width: '18%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={newTask}
            >
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>
                Save
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: '2%',
                borderRadius: 10,
                backgroundColor: '#eb4d4b',
                width: '18%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => showAddTask(false)}
            >
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
        {tasks.length > 0 ? (
          <FlatList
            data={tasks}
            keyExtractor={item => item.id}
            renderItem={(item, index) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    paddingVertical: '4%',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      borderWidth: 1,
                      borderRadius: 10,
                      padding: '2%',
                      width: '58%',
                      textDecorationLine: item.item.completed
                        ? 'line-through'
                        : 'none',
                    }}
                  >
                    {item.item.taskName}
                  </Text>
                  <TouchableOpacity
                    style={{
                      padding: '2%',
                      //   marginTop: '6%',
                      borderRadius: 10,
                      backgroundColor: item.item.completed
                        ? '#95afc0'
                        : '#30336b',
                      width: '18%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => dispatch(toggleTask(item.item))}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#fff',
                      }}
                    >
                      {item.item.completed ? 'Mark Undone' : 'Mark done'}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      padding: '2%',
                      borderRadius: 10,
                      backgroundColor: '#eb4d4b',
                      width: '18%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => dispatch(removeTask(item.item))}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#fff',
                      }}
                    >
                      {'Remove Task'}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default Week5;

const styles = StyleSheet.create({
  localContainer: {
    padding: '4%',
  },
});
