import React from 'react';

const CommentsCreate = () => {
  return (
    <div>
      <form>
        <div className='form-group'>
          <label>New Comments</label>
          <input className='form-control' />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default CommentsCreate;
