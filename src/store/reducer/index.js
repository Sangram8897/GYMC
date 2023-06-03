
import { combineReducers } from 'redux';
import PicadaysReducer from './picadayReducer';
import MembersListReducer from './Common'
import GraphDataReducer from './graph_data'
import MembersFilter from './member_filter'

import ModuleListReducer from '../../containers/home/notes/subject_list/module_list/store/reducer';
import SubModuleListReducer from '../../containers/home/notes/subject_list/module_list/sub_module_list/store/reducer';
import SubjectListReducer from '../../containers/home_/subject_list/store/reducer';


const rootReducer = combineReducers({
  PicadaysReducer,
  MembersListReducer,
  GraphDataReducer,
  MembersFilter,

  ModuleListReducer,
  SubModuleListReducer,
  SubjectListReducer,
});

export default rootReducer;