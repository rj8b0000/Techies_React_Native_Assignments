import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../globalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskToList, toggleTask, removeTask } from '../redux/todoSlice';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import AntDesign from '@react-native-vector-icons/ant-design';
import Modal from 'react-native-modal';
import RadioGroup from 'react-native-radio-buttons-group';
import { ThemeContext } from '../context/ThemeContext';

const Week5 = () => {
  const tasks = useSelector(state => state.todo.tasks);
  const dispatch = useDispatch();
  const [addTask, showAddTask] = useState(false);
  const [text, setText] = useState('');
  const [id, setId] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [filter, setFilter] = useState('0');
  const radioButtons = useMemo(
    () => [
      {
        id: '0',
        completed: 'all',
        label: 'All Tasks',
      },
      {
        id: '1',
        label: 'Done',
        completed: true,
      },
      {
        id: '2',
        label: 'Un Done',
        completed: false,
      },
    ],
    [],
  );
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
  const onSelectTask = id => {
    setFilter(id);
    toggleModal();
  };
  const selectedTasks = useMemo(() => {
    return radioButtons.find(rb => rb.id === filter)?.completed;
  }, [filter]);

  const filteredTasks = useMemo(() => {
    if (selectedTasks === 'all') {
      return tasks;
    }
    return tasks.filter(tasks => tasks.completed === selectedTasks);
  }, [tasks, selectedTasks]);
  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        { backgroundColor: isDarkMode ? '#333' : '#fff' },
      ]}
    >
      <View style={styles.localContainer}>
        <View style={styles.headerRow}>
          <Text
            style={[
              globalStyles.headerTitle,
              { color: isDarkMode ? '#fff' : '#000' },
            ]}
          >
            Todo App
          </Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={toggleTheme}>
              <AntDesign
                name={isDarkMode ? 'sun' : 'moon'}
                size={24}
                color={isDarkMode ? '#f4a244' : '#000'}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal}>
              <AntDesign
                name="more"
                size={24}
                color={isDarkMode ? '#fff' : '#000'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
          <View style={styles.modalContent}>
            <Text style={globalStyles.headerTitle}>Filter Tasks</Text>
            <View style={styles.filterContainer}>
              <RadioGroup
                containerStyle={styles.radioGroupContainer}
                radioButtons={radioButtons}
                onPress={onSelectTask}
                selectedId={filter}
              />
            </View>
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
              style={[
                styles.input,
                {
                  borderColor: isDarkMode ? '#fff' : '#000',
                  color: isDarkMode ? '#fff' : '#000',
                },
              ]}
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
            data={filteredTasks}
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
                      {
                        color: isDarkMode ? '#fff' : '#000',
                        borderWidth: 1,
                        borderColor: isDarkMode ? '#fff' : '#000',
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  modalContent: {
    height: '23%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: '4%',
  },
  filterContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 10,
  },
  radioGroupContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
