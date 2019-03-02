// import Notepad from './notepad-module';
// import { PRIORITY_TYPES, ICON_TYPES, NOTE_ACTIONS } from './utils/constants';

// export const createListItem = function(note) {
//   const nodeItem = document.createElement('li');
//   nodeItem.classList.add('note-list__item');
//   nodeItem.dataset.id = note.id;

//   const noteDiv = document.createElement('div');
//   noteDiv.classList.add('note');
//   noteDiv.append(createNoteContent(note), createNoteFooter(note));

//   nodeItem.append(noteDiv);

//   return nodeItem;
// };

// export const createNoteContent = function(notes) {
//   const noteContent = document.createElement('div');
//   noteContent.classList.add('note__content');

//   const noteTitle = document.createElement('h2');
//   noteTitle.classList.add('note__title');
//   noteTitle.textContent = notes.title;

//   const noteText = document.createElement('p');
//   noteText.classList.add('note__body');
//   noteText.textContent = notes.body;

//   noteContent.append(noteTitle, noteText);

//   return noteContent;
// };

// export const createActionButton = function(noteAction, iconType) {
//   const btn = document.createElement('button');
//   btn.classList.add('action');
//   btn.dataset.action = noteAction;

//   const buttonIcon = document.createElement('i');
//   buttonIcon.classList.add('material-icons', 'action__icon');
//   buttonIcon.textContent = iconType;

//   btn.appendChild(buttonIcon);
//   return btn;
// };

// export const createListSectionOne = function(note) {
//   const nodeSection = document.createElement('section');
//   nodeSection.classList.add('note__section');

//   const nodeSpan = document.createElement('span');
//   nodeSpan.classList.add('note__priority');
//   nodeSpan.textContent = `Priority: ${Notepad.getPriorityName(note.priority)} `;

//   nodeSection.append(
//     createActionButton(NOTE_ACTIONS.INCREASE_PRIORITY, ICON_TYPES.ARROW_UP),
//   );
//   nodeSection.append(
//     createActionButton(NOTE_ACTIONS.DECREASE_PRIORITY, ICON_TYPES.ARROW_DOWN),
//   );

//   nodeSection.append(nodeSpan);

//   return nodeSection;
// };

// export const createListSectionTwo = function(note) {
//   const nodeSection = document.createElement('section');
//   nodeSection.classList.add('note__section');

//   nodeSection.append(createActionButton(NOTE_ACTIONS.EDIT, ICON_TYPES.EDIT));
//   nodeSection.append(
//     createActionButton(NOTE_ACTIONS.DELETE, ICON_TYPES.DELETE),
//   );

//   return nodeSection;
// };

// export const createNoteFooter = function(note) {
//   const nodefooter = document.createElement('footer');
//   nodefooter.classList.add('note__footer');

//   nodefooter.append(createListSectionOne(note), createListSectionTwo(note));

//   return nodefooter;
// };

// export const renderNoteList = function(listRef, note) {
//   const Items = note.map(item => createListItem(item));
//   listRef.nodeList.innerHTML = '';
//   listRef.nodeList.append(...Items);
// };

export const getRefs = () => ({
  nodeList: document.querySelector('.note-list'),
  noteEditorForm: document.querySelector('.note-editor'),
  noteInput: document.querySelectorAll('.note-editor__input'),
  filterNotes: document.querySelector('.search-form__input'),
  openEditor: document.querySelector('.material-icons'),
});
