'use strict';

// const products = {
//   bread: 10,
//   milk: 15,
//   apples: 20,
//   chicken: 50,
//   cheese: 40,
//   PlasticBag: 15,
// };

// const order = {
//   bread: 2,
//   milk: 2,
//   apples: 1,
//   cheese: 4,
// };

// const cashier = {
//   name: 'Иванна',
//   customerMoney: 0,
//   totalPrice: 0,
//   change: 0,
//   error: null,
//   lacksMoney: 0,

//   greet() {
//     console.log(`Добрый день, вас обслуживает ${this.name}`);
//     console.log(`Пробивает...`);
//   },

//   needPlasticBag() {
//     const answertToTheBagQuestion = confirm('пакетик нужен?');
//     if (answertToTheBagQuestion) {
//       order.PlasticBag = 1;
//     }
//   },

//   KasirPunchesGoods() {
//     const products = Object.keys(order);
//     let b = 1500;
//     products.map(elem =>
//       setTimeout(
//         () => console.log(`Пик...  ${elem} - ${order[elem]} шт.`),
//         (b += 1500),
//       ),
//     );
//   },

//   getCustomerMoney(value) {
//     this.customerMoney = value;
//     setTimeout(() => {
//       console.log(`Вы мне дали ${this.customerMoney}грн`);
//     }, 13000);
//   },

//   countTotalPrice(allProducts, order) {
//     for (const value in order) {
//       this.totalPrice += order[value] * allProducts[value];
//     }
//     setTimeout(() => {
//       console.log(`С вас ${this.totalPrice}грн`);
//     }, 10000);
//   },

//   countChange() {
//     this.change = this.customerMoney - this.totalPrice;

//     if (this.change > 0) {
//       this.onSuccess();
//     } else {
//       this.lacksMoney = this.totalPrice - this.customerMoney;
//       this.error = `Очень жаль, но вам не хватает ${
//         this.lacksMoney
//       }грн на покупки`;
//       this.onError();
//     }
//   },

//   onSuccess() {
//     setTimeout(() => {
//       console.log(`Ваша сдача ${this.change}грн, спасибо за покупку,`);
//     }, 15000);
//   },

//   onError() {
//     setTimeout(() => {
//       console.log(this.error);
//     }, 15000);
//   },

//   reset() {},
// };

// cashier.greet();

// cashier.needPlasticBag();

// cashier.KasirPunchesGoods();

// cashier.countTotalPrice(products, order);

// cashier.getCustomerMoney(330);

// cashier.countChange();

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const notepad = {
  notes: [],
  getNotes() {
    return this.notes;
  },
  findNoteById(id) {
    for (let note of this.notes) {
      if (note.id === id) {
        return note;
      }
    }
  },
  saveNote(note) {
    this.notes.push(note);
  },
  deleteNote(id) {
    for (let i = 0; i < this.notes.length; i += 1) {
      const note = this.notes[i];
      if (note.id === id) {
        this.notes.splice(i, 1);
        return;
      }
    }
  },
  updateNoteContent(id, updatedContent) {
    const note = this.findNoteById(id);
    if (!note) return;
    note.title = updatedContent.title;
  },
  updateNotePriority(id, priority) {
    const note = this.findNoteById(id);
    if (!note) return;
    note.priority = priority;
  },
  filterNotes(query) {
    const filterNotes = [];

    for (const note of this.notes) {
      const noteContent = `${note.title} ${note.body}`;
      const hasOuery = noteContent.toLowerCase().includes(query.toLowerCase());

      if (hasOuery) {
        filterNotes.push(note);
      }
    }
    return filterNotes;
  },

  filterByPriority(priority){
    const notesPriority = [];
    for(const note of this.notes){
      if(note.priority === priority){
        notesPriority.push(note);
      }
    }
    return notesPriority;
  }
};

notepad.saveNote({
  id: 1,
  title: 'JavaScript essentials',
  body:
    'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
  priority: PRIORITY_TYPES.LOW,
});

notepad.saveNote({
  id: 2,
  title: 'Refresh HTML and CSS',
  body:
    'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
  priority: PRIORITY_TYPES.NORMAL,
});

notepad.saveNote({
  id: 3,
  title: 'Get comfy with Frontend frameworks',
  body:
    'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: PRIORITY_TYPES.NORMAL,
});

notepad.saveNote({
  id: 4,
  title: 'Winter clothes',
  body:
    "Winter is coming! html Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: PRIORITY_TYPES.LOW,
});

console.log('Все текущие заметки: ', notepad.getNotes());

/*
  Зима уже близко, пора поднять приоритет на покупку одежды
*/
notepad.updateNotePriority(4, PRIORITY_TYPES.NORMAL);
// Смотрю что у меня в заметках
console.log(
  'Заметки после обновления приоритета для id 4: ',
  notepad.getNotes(),
);

// /*
//   Решил что фреймворки отложу немного, понижаю приоритет
// */
notepad.updateNotePriority(3, PRIORITY_TYPES.LOW);
console.log(
  'Заметки после обновления приоритета для id 3: ',
  notepad.getNotes(),
);

// /*
//   Решил отфильтровать заметки по слову html
// */
console.log(
  'Отфильтровали заметки по ключевому слову "html": ',
  notepad.filterNotes('html'),
);

// /*
//   Решил отфильтровать заметки по слову javascript
// */
console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notepad.filterNotes('javascript'),
);

// /*
//   Обновим контент заметки с id 3
// */
notepad.updateNoteContent(3, { title: 'Get comfy with React.js or Vue.js' });
console.log(
  'Заметки после обновления контента заметки с id 3: ',
  notepad.getNotes(),
);

// /*
//   Повторил HTML и CSS, удаляю запись c id 2

// notepad.deleteNote(2);
// console.log('Заметки после удаления с id 2: ', notepad.getNotes());

console.log("Отфильтровали по приоритету: ", notepad.filterByPriority(PRIORITY_TYPES.LOW));
