export const View = (() => {

    const domstr = {
      container: '#todolist_container',
      deletebtn: '.deletebtn',
      inputbox: '.todolist__input'
    };
    const render = (ele, tmp) => {
      ele.innerHTML = tmp;
    }
    const createTmp = (arr) => {
      let tmp = '';
      arr.forEach(ele => {
        tmp += `
          <li>
            <span>${ele.id}-${ele.title}</span>
            <button id="${ele.id}" class="deletebtn">X</button>
          </li>
        `;
      });
      return tmp;
    }
  
    return {
      domstr,
      render,
      createTmp
    };
  })();