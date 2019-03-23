const INITIAL_STATE = {
    email: '',
    FirstName: '',
    LastName: '',
    Number: '',
     password: '',
     password2: '',
    logintrigger:false,




    // password3: '',
      user: null, 
      error:'', 
      loading: false,
      Name: '',
      done:'',
      haha:false,
      set:false,
      forset:false,
      forset2:false,
      forset3:false,
      cow:false,
      goat:false,
      sun:false,
      hen:false,
    };
    

export default (state = INITIAL_STATE , action) => {

    console.log(action);
    switch(action.type){
        
    case 'email_changed':
            return {...state, email: action.payload};

    case 'password_changed': 
        return {...state, password: action.payload};

    case 'passwordChanged2_changed':
        return {...state, password2: action.payload};

    case 'number_changed': 
        return {...state, Number: action.payload};

    case 'FirstName_changed':
        return {...state, FirstName: action.payload};

    case 'LastName_changed': 
        return {...state, LastName: action.payload};

    case 'License_changed': 
        return {...state, Licence: action.payload};


    case 'LastFour_changed': 
        return {...state, fourD: action.payload};

    case 'Elections':  
        return {...state, Elections: action.payload};














    case 'code_changed2': 
        return {...state,codetwo : action.payload};

    case 'code_changed': 
        return {...state, codeone: action.payload}; 

    case 'password_changed2': 
        return {...state, password2: action.payload};

    case 'Name_changed': 
        return {...state, Name: action.payload};
    
    case 'Name_changed2': 
        return {...state, Name2: action.payload};
    case 'LoginUserDone':
    
        return {...state,Active:action.payload, logintrigger:true};
    case 'LoginUserFail':
        return {...state,password:'', password2:'',codeone:"",Adstu:true,codetwo:"", ID2:'', error: action.payload, loading: false}; 
    case 'LoginUserFaill':
        return {...state,password:'', password2:'',Name2:'', ID2:'',loading: false, kkk: action.payload, set:true, forset3:true,haha:true,hen:true, sun:true }; 
        
    case 'Login_user':
        return {...state, loading: true, error:''}; 
    default:
        return state;
    }
};
