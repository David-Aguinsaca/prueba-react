
import React from 'react';

import GifCard from '../molecules/gif-card';

/* {tasksList.map((task, index) => (
    <Task
      deleteTask={deleteTask}
      manageCompletedTasks={manageCompletedTasks}
      key={`task-${index}`}
      task={task}
    />
  ))} */

function GifCardList(props) {
  return <>
    {
      props.gifList.length > 0 ?
        props.gifList.map((task) => (
          <GifCard
            key={task.id}
            id={task.id}
            url={task.url}
            onClick = {props.onClick}
          />
        )) : <h2>
          No posee Gif
        </h2>}

  </>
}

export default GifCardList;