import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import ToDos from './ToDos';

const ToDoContainer = () => {
  const [activeTab, setActiveTab] = useState('tab-one');
  return (
    <div>
      <h1>To-Dos</h1>
      <Tabs activeKey={activeTab} onSelect={setActiveTab}>
        <Tab eventKey="tab-one" title="To-Dos">
          <ToDos />
        </Tab>
        <Tab eventKey="tab-two" title="Completed">
          <p>Add completed items list.</p>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ToDoContainer;
