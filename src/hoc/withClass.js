import  React from 'react'

const withClass = (Component, classNames)=>{
    return (props) =>
        <div className={classNames}>
            <Component/>
        </div>
};

export default withClass