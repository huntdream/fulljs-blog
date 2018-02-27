import React, { Component } from 'react';
import { CircularProgress } from 'material-ui/Progress';

const Loading = props => {
  if (props.error) {
    return <div>Error occurred, try to refresh current page</div>;
  } else if (props.isLoading) {
    return <CircularProgress style={{ alignSelf: 'center' }} />;
  } else {
    return null;
  }
};

export default Loading;
