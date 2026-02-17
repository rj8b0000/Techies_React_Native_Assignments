import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../globalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskToList, toggleTask, removeTask } from '../redux/todoSlice';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import AntDesign from '@react-native-vector-icons/ant-design';
import Modal from 'react-native-modal';

const Week5 = () => {
  const tasks = useSelector(state => state.todo.tasks);
  const dispatch = useDispatch();
  const [addTask, showAddTask] = useState(false);
  const [text, setText] = useState('');
  const [id, setId] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    console.log('New task: ', tasks);
  }, [tasks]);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={globalStyles.headerTitle}>Todo App</Text>
          <TouchableOpacity onPress={toggleModal}>
            <AntDesign name="more" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={setModalVisible(false)}
        >
          <View
            style={{
              height: '30%',
              // justifyContent: 'center',
              // alignItems: 'center',
              backgroundColor: '#fff',
              borderRadius: 10,
              padding: '4%',
            }}
          >
            <Text style={globalStyles.headerTitle}>Filter Tasks</Text>

            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal>
        <TouchableOpacity
          style={styles.addTaskButton}
          onPress={() => showAddTask(true)}
        >
          <Text style={styles.buttonText}>+ Add Task</Text>
        </TouchableOpacity>
        {addTask ? (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={text}
              onChangeText={setText}
              placeholder="Enter the Task"
            />
            <TouchableOpacity style={styles.saveButton} onPress={newTask}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => showAddTask(false)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        ) : null}
        {tasks.length > 0 ? (
          <FlatList
            data={tasks}
            keyExtractor={item => item.id}
            renderItem={(item, index) => {
              return (
                <View style={styles.itemContainer}>
                  <Text
                    style={[
                      styles.taskText,
                      {
                        textDecorationLine: item.item.completed
                          ? 'line-through'
                          : 'none',
                      },
                    ]}
                  >
                    {item.item.taskName}
                  </Text>
                  <TouchableOpacity
                    style={[
                      styles.baseActionButton,
                      {
                        backgroundColor: item.item.completed
                          ? '#95afc0'
                          : '#30336b',
                      },
                    ]}
                    onPress={() => dispatch(toggleTask(item.item))}
                  >
                    <Text style={styles.actionButtonText}>
                      {item.item.completed ? 'Mark Undone' : 'Mark done'}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => dispatch(removeTask(item.item))}
                  >
                    <Text style={styles.actionButtonText}>{'Remove Task'}</Text>
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
  addTaskButton: {
    padding: '4%',
    marginTop: '6%',
    borderRadius: 10,
    backgroundColor: '#686de0',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '4%',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: '4%',
    width: '58%',
  },
  saveButton: {
    padding: '2%',
    borderRadius: 10,
    backgroundColor: '#6ab04c',
    width: '18%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    padding: '2%',
    borderRadius: 10,
    backgroundColor: '#eb4d4b',
    width: '18%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: '4%',
  },
  taskText: {
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 10,
    padding: '2%',
    width: '58%',
  },
  baseActionButton: {
    padding: '2%',
    borderRadius: 10,
    width: '18%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});
