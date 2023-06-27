import './App.css';
import React from 'react';
// import Button from './Button';
// import PlaceholderPost from './PlaceholderPost';
// import Comment from './Comment';
// import Comment2 from './Comment2';
import PlaceholderPostHook from './PlaceholderPostHook';
import CommentHook from './CommentHook';
import Comment2Hook from './Comment2Hook';

function App() {
  return (
    <>
      <PlaceholderPostHook/>
      <CommentHook/>
      <Comment2Hook/>
      {/* <PlaceholderPost /> */}
      {/* <Comment/> */}
      {/* <Comment2/> */}
    </>
  );
}

export default App;
