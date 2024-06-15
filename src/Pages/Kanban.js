import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import TaskForm from "../components/TaskForm";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Kanban = ({ tasks, addTask, updateTaskStatus }) => {
  const columns = ["To Do", "In Progress", "Done"];

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;
    if (source.droppableId === destination.droppableId) return;

    updateTaskStatus(parseInt(draggableId), destination.droppableId);
  };

  return (
    <Box>
      <TaskForm addTask={addTask} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {columns.map((column) => (
            <Droppable droppableId={column} key={column}>
              {(provided) => (
                <Box
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  sx={{ width: "30%", p: 2, border: "1px solid #ccc" }}
                >
                  <Typography variant="h6">{column}</Typography>
                  {tasks
                    .filter((task) => task.status === column)
                    .map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <Card
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            sx={{ mb: 2 }}
                          >
                            <CardContent>
                              <Typography>{task.title}</Typography>
                            </CardContent>
                          </Card>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
          ))}
        </Box>
      </DragDropContext>
    </Box>
  );
};

export default Kanban;
