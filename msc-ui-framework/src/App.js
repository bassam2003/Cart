import React from 'react';
import Button from './lib/Button';

const App = () => {
  return (
    <div className="m-10">
      <Button size="md">Button</Button>
      <Button fullRounded size="md" color="success" outlined disabled>
        B
      </Button>
      {/* <div className="h-48 w-48 bg-monochromes"></div>
      <div className="h-48 w-48 bg-monochromes opacity-80 text-white">80%</div>
      <div className="h-48 w-48 bg-monochromes opacity-16 text-white">16%</div>
      <div className="h-48 w-48 bg-monochromes opacity-12 text-white">12%</div>
      <div className="h-48 w-48 bg-gradient-to-r from-success to-success-accent-1"></div>
      <div className="h-48 w-48 "></div> */}
    </div>
  );
};

export default App;
