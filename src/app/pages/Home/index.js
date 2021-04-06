import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@/app/components/Button';

const Home = () => {
  const history = useHistory();
  return (
    <div className="row">
      <Button warning onClick={() => history.push('/todo-list')}>
        Go to todo-list
      </Button>
    </div>
  );
};

export default Home;
