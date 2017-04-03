let array = ['first', 'second', 'third'];
let [a, b, c] = array;

console.log(a, b, c);

let todo = {
  description: 'Watch new ES6 section',
  completed: false
};
let {description: message, completed} = todo;
console.log(message);
console.log(completed);

function getTodoStatus({completed}) {
  if (typeof completed === 'boolean') {
    return [`Todo is ${completed ? '' : 'not '}completed.`];
  } else {
    return [undefined, {error: 'INVALID_TODO_ITEM'}]
  }
}

let [res, err] = getTodoStatus(todo);
if (err) {
  console.log(err.error);
} else {
  console.log(res);
}
