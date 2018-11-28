
const INITIAL_STATE = {
      pros: {}, 
      gra: {}, 
      scores: {}, 
      test: {},
      teach: {},
      Subs: {}, 
      SubsS: {},
      Eles: {},
      Anno: {},  
      mark: {},
      Id: 0, 
      info:{},
      Students:{},
      Students2:{},
      Students3:{},
      Students4:{},
      class:{},
      profile:'',
      loading1: false,
      set2:false,
      Adstu:false,
      infol:{},
      infols:0.0,
      schoolName:'',
      hope:false,
      id:''
    };

   
export default (state = INITIAL_STATE , action) => {

    console.log(action);
    switch(action.type){
        
    case 'Login_user2':
        return {...state, loading1: true};

    case 'mark_changed':
            return {...state, gra: action.payload.grade, scores:action.payload.score }

    case 'mark_changed2':
            return {...state, gra: action.payload }

    case 'StopLoader':
        return {...state, loading1: false, Adstu:true,set2:true, lol: action.payload}; 

    case 'Name_changedsub': 
        return {...state, Namesub: action.payload}; 
        
    case 'Name_changedsub2': 
        return {...state, Namesub2: action.payload};  
    
    case 'Name_changedsub22': 
        return {...state, elesub2: action.payload};
    
    case 'num_changed': 
        return {...state, num: action.payload};

    case 'pic_changed': 
        return {...state,loading1: false, hope:true, num: action.payload};
           
    case 'FetchDone':
        return {...state, pros: action.payload, loading1: false};

    case 'FetchclaaDone':
        return {...state, class: action.payload, loading1: false};

    case 'TFetchDone':
        return {...state, teach: action.payload,profile:'Thome', loading1: false};

    case 'SFetchDone':
        return {...state, Subs: action.payload.rest, Detials: action.payload.vals, loading1: false};
    
    case 'SFetchDoneS':
        return {...state, SubsS: action.payload.rest, profile:'student', Overall:action.payload.Overall, loading1: false};

    case 'SFetchInfoS':
        return {...state, infol: action.payload.vals, loading1: false};
        
        
    case 'SFetchInfo':
        return {...state, infols: action.payload, loading1: false};
    case 'EFetchDone':
        return {...state, Eles: action.payload, loading1: false};
        
    case 'StFetchDone':
        return {...state, stu: action.payload, loading1: false};

    case 'GrFetchDone':
        return {...state, gra: action.payload.rest, Id: action.payload.Id, scores: action.payload.Grades, loading1: false}; 
        
          
    case 'stuclassFetchDone':
        return {...state, Students: action.payload.Students, loading1: false,};// Id2: action.payload.check,}; 
   
    case 'stuclassFetchDone22':
        return {...state, Students4: action.payload.Students, loading1: false,};
    
    case 'stuclassFetchDone2':
        return {...state, Students2: action.payload.Students, loading1: false,};
    case 'remclassFetchDone2':
        return {...state, Students3: action.payload.Students, loading1: false,};    
        
    case 'AnnoFetchDone':
        return {...state, Anno: action.payload, scores: action.payload.Grades, loading1: false};

        
    case 'markFetchDonexx':
        return {...state, mark: action.payload.rest, av:action.payload.Av, img:action.payload.Image, loading1: false}; 
        
    case 'markFetchDone':
        return {...state, mark: action.payload.rest, av:action.payload.Av, loading1: false}; 

    case 'infosaved':
        return {...state, info: action.payload};     

     case 'infofetched':
        return {...state, loading1: false}; 

  case 'profile_Saved':
        return {...state, id:action.payload.id, schoolName:action.payload.val}

    default:
        return state;
    }
};