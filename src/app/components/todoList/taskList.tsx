/* eslint-disable react/react-in-jsx-scope */

'use client';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import TaskItem from './taskItem';
import styles from './style/taskList.module.scss';
import { setPage, setFilter } from '../../../redux/tasksSlice';
import { useState } from 'react';

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, currentPage, filter } = useSelector((state: RootState) => state.tasks);
  const tasksPerPage = 3;

  const [filterValues, setFilterValues] = useState(filter);

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const filteredTasks = tasks.filter((task) => {
    const titleMatch = filter.title
      ? task.title.toLowerCase().includes(filter.title.toLowerCase())
      : true;
    const emailMatch = filter.email
      ? task.email.toLowerCase().includes(filter.email.toLowerCase())
      : true;
    const statusMatch = filter.status !== 'все' ? task.status === filter.status : true;

    return titleMatch && emailMatch && statusMatch;
  });

  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);
  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);

  const handlePageChange = (pageNumber: number) => {
    dispatch(setPage(pageNumber));
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilterValues({ ...filterValues, [name]: value });
  };

  const applyFilter = () => {
    dispatch(setFilter(filterValues));
  };

  return (
    <div className={styles['task-list']}>
      <div className={styles['task-list__filters']}>
        <input
          type="text"
          placeholder="Поиск по названию задачи"
          name="title"
          value={filterValues.title}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          placeholder="Поиск по email"
          name="email"
          value={filterValues.email}
          onChange={handleFilterChange}
        />
        <select name="status" value={filterValues.status} onChange={handleFilterChange}>
          <option value="все">Все</option>
          <option value="выполнена">Выполнена</option>
          <option value="не выполнена">Не выполнена</option>
        </select>
        <button onClick={applyFilter}>Применить фильтр</button>
      </div>
      <ul className={styles['task-list__items']}>
        {currentTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
      <div className={styles['task-list__pagination']}>
        {totalPages > 1 ? (
          Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={styles['task-list__pagination-button']}
            >
              {index + 1}
            </button>
          ))
        ) : (
          <button disabled className={styles['task-list__pagination-button']}>
            1
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskList;
