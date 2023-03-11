import { renderDomTree } from './render';
import state, { addPost } from './redux/state';

renderDomTree(state, addPost)

