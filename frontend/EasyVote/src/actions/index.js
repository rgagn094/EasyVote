//const IP = '192.168.0.12'
//const IP = '192.168.2.48'
const IP = '192.168.0.19';
//const IP = '127.0.0.1'


//import ImagePicker from 'react-native-image-crop-picker'
//import RNFetchBlob from 'rn-fetch-blob'

export const emailChanged = (text) => {
    return{
        type: 'email_changed',
        payload: text
    };
};




export const passwordChanged = (text) => {
    return{
        type: 'password_changed',
        payload: text
    };
};

export const passwordChanged2 = (text) => {
        return{
            type: 'passwordChanged2_changed',
            payload: text
        };
    };

    export const numberChanged = (text) => {
            return{
                type: 'number_changed',
                payload: text
            };
        };

export const FirstNameChanged = (text) => {
        return{
            type: 'FirstName_changed',
            payload: text
        };
    };

    export const LastNameChanged = (text) => {
            return{
                type: 'LastName_changed',
                payload: text
            };
        };

        export const LicenseChanged = (text) => {
                return{
                    type: 'License_changed',
                    payload: text
                };
            };

            export const LastFourChanged = (text) => {
                    return{
                        type: 'LastFour_changed',
                        payload: text
                    };
                };

                export const login = ({email,password}) => {
                     return (dispatch) => {
                            dispatch({type: 'Login_user'});
                        
                        //     if(email == '' || password=='' || password2=='' || Name =='' || typeof email == 'undefined' || typeof password == 'undefined' || typeof Name == 'undefined' || typeof password2 == 'undefined' ){
                        //         dispatch({type: 'LoginUserFail', payload: "Empty Field"});
                        //     }
                        //     
                        //     else{
                                
                            fetch('http://127.0.0.1:8000/user/login', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                            email: email,
                            password:password,
                            verificationMethod: 1
                                                        }),
                            }).then((response) =>{
                                
                           if( response.message){
                               dispatch({type: 'LoginUserDone', payload: response.message});
                            }
                           else{
                              dispatch({type: 'LoginUserDone', payload: response.errors});
                            }
                            
                            });
                           }
                        //   };
                        };

      

                export const Signup = ({FirstName,LastName,number,email,password,password2,Licence,fourD}) => {
    
                        return (dispatch) => {
                        dispatch({type: 'Login_user'});
                    
                    //     if(email == '' || password=='' || password2=='' || fi =='' || typeof email == 'undefined' || typeof password == 'undefined' || typeof Name == 'undefined' || typeof password2 == 'undefined' ){
                    //         dispatch({type: 'LoginUserFail', payload: "Empty Field"});
                    //     }
                    //     
                    //     else{
                            
                        fetch('http://127.0.0.1:8000/user/register', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                        firstName: FirstName,
                        lastName:LastName,
                        number:number,
                            email: email,
                            password: password,
                            password2: password2,
                    licence:Licence,
                    SIN:fourD
                        }),
                        }).then((response) => response.json()).then(response => {
                            
                       if(response.user){
                           let users = response.user;
                           dispatch({type: 'LoginUserDone', payload: users});
                        }
                       else{
                          dispatch({type: 'LoginUserFail', payload: response.errors});
                        }
                        
                        });
                       }
                     // };
                    };

                
                






                    

                    export const Fetchelection = () => {
    
                            return (dispatch) => {
                            dispatch({type: 'Login_user'});
                        
                            
                            fetch('http://'+IP+':80/GGfiles/Ap/delacoo.php', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                 
                              }),
                            }).then((response) => response.json()).then(users => {
                           if( typeof users.Id != 'undefined'){
                               dispatch({type: 'LoginUserDone', payload: users});
                            }
                           else{
                              dispatch({type: 'LoginUserFail', payload: users});
                            }
                            
                            });
                           
                          };
                        };






















export const fetchinfo = () => {
    return{
        type: 'infofetched',
        payload: "done"
    };
};


export const SaveInfo = (item) => {
    return{
        type: 'infosaved',
        payload: item
    };
};



export const markChanged = (graaa,score) => {
    return{
        type: 'mark_changed',
        payload: {"grade":graaa, "score":score}
    };
};

export const markChanged2 = (graaa) => {
    return{
        type: 'mark_changed2',
        payload: graaa
    };
};

export const passwordChanged22 = (text) => {
    return{
        type: 'password_changed2',
        payload: text
    };
};

export const passwordChanged3 = (text) => {
    return{
        type: 'password_changed3',
        payload: text
    };
};


export const NameChanged = (text) => {
    return{
        type: 'Name_changed',
        payload: text
    };
};

export const NameChanged2 = (text) => {
    return{
        type: 'Name_changed2',
        payload: text
    };
};



export const NameChangedSub = (text) => {
    return{
        type: 'Name_changedsub',
        payload: text
    };
};

export const NameChangedSub2 = (text) => {
    return{
        type: 'Name_changedsub2',
        payload: text
    };
};

export const NameChangedSub22 = (text) => {
    return{
        type: 'Name_changedsub22',
        payload: text
    };
};

export const numchanged = (text) => {
    return{
        type: 'num_changed',
        payload: text
    };
};

    ////////    IP ADDRESS
export const loginUser = ({email, password}) => {
    
    return (dispatch) => {
    dispatch({type: 'Login_user'});

    if(email == '' || password == '' || typeof email == 'undefined' || typeof password == 'undefined' ){
        dispatch({type: 'LoginUserFail', payload: "Empty Field"});
    }
    else{
    fetch('http://'+IP+':80/GGfiles/Ap/login.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        email: email,
        password: password,
    }),
    }).then((response) => response.json()).then(users => {
   if( typeof users.Id != 'undefined'){
       dispatch({type: 'LoginUserDone', payload: users});
    }
   else{
      dispatch({type: 'LoginUserFail', payload: users});
    }
    
    });
   }
  };
};


export const delacoun = ({Id}) => {
    
        return (dispatch) => {
        dispatch({type: 'Login_user'});
    
        
        fetch('http://'+IP+':80/GGfiles/Ap/delacoo.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
             Id: Id
          }),
        }).then((response) => response.json()).then(users => {
       if( typeof users.Id != 'undefined'){
           dispatch({type: 'LoginUserDone', payload: users});
        }
       else{
          dispatch({type: 'LoginUserFail', payload: users});
        }
        
        });
       
      };
    };

export const ChangePass = ({Id,Oldpass,password,password2}) => {
    
    return (dispatch) => {
    dispatch({type: 'Login_user'});

    if(password=='' || password2=='' || Oldpass=='' || typeof password == 'undefined' || typeof password2 == 'undefined'||  typeof Oldpass == 'undefined'){
        dispatch({type: 'LoginUserFail', payload: "Empty Field"});
    }

    else if(password != password2){
        dispatch({type: 'LoginUserFail', payload: "Passwords not the same"});
    }
    
    else{
        
    fetch('http://'+IP+':80/GGfiles/Ap/Cp.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    Id,Id,
    ID2:Oldpass,
    signemail12: password,
    signemail1: password2,
    }),
    }).then((response) => response.json()).then(users => {
    if( typeof users.Id != 'undefined'){
       dispatch({type: 'LoginUserFaill'});
    }
   else{
      dispatch({type: 'LoginUserFail', payload: users});
    }
        
    });
   }
  };
};



export const ChangePassForgot = ({Id,password,password2}) => {
    
        return (dispatch) => {
        dispatch({type: 'Login_user'});
    
        if(password=='' || password2=='' || typeof password2 == 'undefined' || typeof password == 'undefined'){
            dispatch({type: 'LoginUserFail', payload: "Empty Field"});
        }
    
    else if(password != password2){
            dispatch({type: 'LoginUserFail', payload: "Passwords not the same"});
        }
        
        else{
            
        fetch('http://'+IP+':80/GGfiles/Ap/Cpf.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        Id,Id,
        signpass: password,
        signpass2: password2,
        }),
        }).then((response) => response.json()).then(users => {
    if( typeof users.Id != 'undefined'){
           dispatch({type: 'LoginUserFaill'});
        }
       else{
          dispatch({type: 'LoginUserFail', payload: users});
        }
            
    });
   }
  };
};






export const fetchTeach = ({valll,nname}) => {
    
    return (dispatch) => {
    dispatch({type: 'Login_user2'});
   
        
    fetch('http://'+IP+':80/GGfiles/Ap/ghomeFetch.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        Id: valll,
        name: nname
    }),
    }).then((response) => response.json()).then(users => {
        
       dispatch({type: 'TFetchDone', payload: users});
    });
   }
};



export const SubFetch = ({valll,nname}) => {
    
    return (dispatch) => {
    
 dispatch({type: 'Login_user2'});
        
    fetch('http://'+IP+':80/GGfiles/Ap/Subfetch.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        Id: valll,
        name: nname
    }),
    }).then((response) => response.json()).then(users => {
        
       dispatch({type: 'SFetchDone', payload: users});
    });
   }
  };



export const SubTinfo = ({valll,nname}) => {
    
        return (dispatch) => {
        
     dispatch({type: 'Login_user2'});
            
        fetch('http://'+IP+':80/GGfiles/Ap/infol.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Id: valll,
            name: nname
        }),
        }).then((response) => response.json()).then(users => {
            
           dispatch({type: 'SFetchInfoS', payload: users});
        });
       }
    };
    
    export const SubTinfos = ({valll,nname}) => {
    
            return (dispatch) => {
            
         dispatch({type: 'Login_user2'});
                
            fetch('http://'+IP+':80/GGfiles/Ap/infols.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Id: valll,
                name: nname
            }),
            }).then((response) => response.json()).then(users => {
                
               dispatch({type: 'SFetchInfo', payload: users});
            });
           }
        };

export const SubFetchS = ({valll,nname}) => {
    
    return (dispatch) => {
    
 dispatch({type: 'Login_user2'});
        
    fetch('http://'+IP+':80/GGfiles/Ap/SubfetchS.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        Id: valll,
        name: nname
    }),
    }).then((response) => response.json()).then(users => {
        
       dispatch({type: 'SFetchDoneS', payload: users});
    });
   }
};

export const AnnoucFetch = ({valll,nname}) => {
    return (dispatch) => {
    dispatch({type: 'Login_user2'});
    fetch('http://'+IP+':80/GGfiles/Ap/AnnocFetchS.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        Id: valll,
        name: nname
    }),
    }).then((response) => response.json()).then(users => {
       dispatch({type: 'AnnoFetchDone', payload: users});
    });
   }
};



export const eleFetch = ({name,Sname}) => {
    return (dispatch) => {
    dispatch({type: 'Login_user2'});
    fetch('http://'+IP+':80/GGfiles/Ap/elefetch.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    name: name,
    Sname: Sname
    }),
    }).then((response) => response.json()).then(users => {
       dispatch({type: 'EFetchDone', payload: users});
    });
   }
  };

export const stuFetch = ({name,Sname,room}) => {
    return (dispatch) => {
    dispatch({type: 'Login_user2'});
    fetch('http://'+IP+':80/GGfiles/Ap/stufetch.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    name: name,
    Sname: Sname,
    room: room                           
    }),
    }).then((response) => response.json()).then(users => {
       dispatch({type: 'StFetchDone', payload: users});
    });
   }
  };


export const greFetch = ({name,Sname,worth,ele}) => {
    return (dispatch) => {
    dispatch({type: 'Login_user2'});
    fetch('http://'+IP+':80/GGfiles/Ap/grafetch.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    name: name,
    Sname: Sname,
    ele: ele,
    worth: worth                      
    }),
    }).then((response) => response.json()).then(users => {
    dispatch({type: 'GrFetchDone', payload: users});
    });
   }
};


export const fechstuclass = ({School,classRoom}) => {
    return (dispatch) => {
    dispatch({type: 'Login_user2'});
    fetch('http://'+IP+':80/GGfiles/Ap/fetchstuclass.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        name: School,
        Sname: classRoom,                      
        }),
        }).then((response) => response.json()).then(users => {
        dispatch({type: 'stuclassFetchDone', payload: users});
        });
       }
    };
    

    export const fechstuclass2 = ({School,classRoom,Subname}) => {
        return (dispatch) => {
        dispatch({type: 'Login_user2'});
        fetch('http://'+IP+':80/GGfiles/Ap/fetchstuclass2.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            name: School,
            Sname: Subname,   
            room:classRoom,                   
            }),
            }).then((response) => response.json()).then(users => {
           dispatch({type: 'stuclassFetchDone2', payload: users});
            });
           }
        };

        
        
        export const remstuclass2 = ({School,classRoom,Subname}) => {
            return (dispatch) => {
            dispatch({type: 'Login_user2'});
            fetch('http://'+IP+':80/GGfiles/Ap/remstuclass.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                name: School,
                Sname: Subname,   
                room:classRoom,                   
                }),
                }).then((response) => response.json()).then(users => {
               dispatch({type: 'stuclassFetchDone22', payload: users});
                });
               }
            };
                    
        export const remstuclass = ({School,Subname}) => {
            return (dispatch) => {
            dispatch({type: 'Login_user2'});
            fetch('http://'+IP+':80/GGfiles/Ap/remeleclass.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                name: School,
                Sname: Subname,   
                }),
                }).then((response) => response.json()).then(users => {
                dispatch({type: 'remclassFetchDone2', payload: users});
                });
               }
            };
    

        
               

export const markFetch2 = ({name,Sname,sid}) => {
    return (dispatch) => {
    dispatch({type: 'Login_user2'});
    fetch('http://'+IP+':80/GGfiles/Ap/markFetch2.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    name: name,
    Sname: Sname,
    sid: sid,                    
    }),
    }).then((response) => response.json()).then(users => {
    dispatch({type: 'markFetchDonexx', payload: users});
    });
   }
  };
export const markFetch = ({name,Sname,sid}) => {
    
    return (dispatch) => {
    dispatch({type: 'Login_user2'});
    fetch('http://'+IP+':80/GGfiles/Ap/markfetch.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    name: name,
    Sname: Sname,
    sid: sid,                    
    }),
    }).then((response) => response.json()).then(users => {
   dispatch({type: 'markFetchDone', payload: users});
    });
   }
  };



export const grademarks = ({name,Sname,ele,Ids,scores,room,worth}) => {
    return (dispatch) => {
    dispatch({type: 'Login_user2'});
    fetch('http://'+IP+':80/GGfiles/Ap/grademarks.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    name: name,
    Sname: Sname,
    ele: ele,
    Ids: Ids,
    scores: scores,
    room:room,
    worth:worth
}),
    }).then((response) => response.json()).then(users => {
   dispatch({type: 'StopLoader'});
    });
   }
  };


export const Creareclass = ({Students,Subname,School,Tid,name,classRoom,classRoom2}) => {
        return (dispatch) => {
        dispatch({type: 'Login_user2'});
        fetch('http://'+IP+':80/GGfiles/Ap/step3app.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        name: School,
        Sname: Subname,
        Tname: name,
        Tid: Tid,
        Students: Students,
        room:classRoom,
        room2:classRoom2
    
        }),
        }).then((response) => response.json()).then(users => {
           if( typeof users.Id != 'undefined'){
          dispatch({type: 'StopLoader',payload: users});
                }
            else{
          dispatch({type: 'LoginUserFail', payload: users}); 
             
            }
        });
       }
};


 export const removELEE = ({Students,Subname,School,classRoom}) => {

    return (dispatch) => {
    dispatch({type: 'Login_user2'});
    fetch('http://'+IP+':80/GGfiles/Ap/removELEE.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        name: School,
        Sname: Subname,
        Students: Students,
        room:classRoom
    
        }),
        }).then((response) => response.json()).then(users => {
           if( typeof users.Id != 'undefined'){
          dispatch({type: 'StopLoader',payload: users});
                }
            else{
          dispatch({type: 'LoginUserFail', payload: users}); 
             
            }
        });
       }
 };
 
 export const removstud = ({Students,Subname,School,Tid}) => {

    return (dispatch) => {
    dispatch({type: 'Login_user2'});
    fetch('http://'+IP+':80/GGfiles/Ap/removstud.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        name: School,
        Sname: Subname,
        Students: Students,
        Tid:Tid
    
        }),
        }).then((response) => response.json()).then(users => {
           if( typeof users.Id != 'undefined'){
          dispatch({type: 'StopLoader',payload: users});
                }
            else{
          dispatch({type: 'LoginUserFail', payload: users}); 
             
            }
        });
       }
 };

 
 export const adstu = ({Students,Subname,School,Tid}) => {

    return (dispatch) => {
    dispatch({type: 'Login_user2'});
    fetch('http://'+IP+':80/GGfiles/Ap/adstu.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        name: School,
        Sname: Subname,
        Students: Students,
        Tid:Tid
    
        }),
        }).then((response) => response.json()).then(users => {
           if( typeof users.Id != 'undefined'){
          dispatch({type: 'StopLoader',payload: users});
                }
            else{
          dispatch({type: 'LoginUserFail', payload: users}); 
             
            }
        });
       }
 };

 
 
                  
export const ForgotPass = ({email}) => {
    
    return (dispatch) => {
    dispatch({type: 'Login_user'});
if(email == '' || typeof email == 'undefined' ){
        dispatch({type: 'LoginUserFail', payload: "Empty Field"});
    }
    else{
    fetch('http://'+IP+':80/GGfiles/Ap/forgotpass.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        email: email,
    }),
    }).then((response) => response.json()).then(users => {
        
   if( typeof users.Id != 'undefined'){
       dispatch({type: 'LoginUserDone', payload: users});
    }
   else{
      dispatch({type: 'LoginUserFail', payload: users});
    }
    
    });
   }
  };
};


export const codePass = ({Name}) => {
    
        return (dispatch) => {
        dispatch({type: 'Login_user'});
        //console.log(Name);
        
        if(Name == '' || (typeof Name == 'undefined')){
            dispatch({type: 'LoginUserFail', payload: "Empty field"});
        }
        else{
        fetch('http://'+IP+':80/GGfiles/Ap/codepass.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
             Name: Name,
        }),
        }).then((response) => response.json()).then(users => {
            
       if( typeof users.Id != 'undefined'){
           dispatch({type: 'LoginUserDone', payload: users});
        }
       else{
          dispatch({type: 'LoginUserFail', payload: users});
        }
        
        });
       }
      };
    };
    

    export const resendcodePass2 = ({vall}) => {
    
            return (dispatch) => {
            dispatch({type: 'Login_user'});
            //console.log(vall);
            
            if(vall == '' || (typeof vall == 'undefined')   ){
                dispatch({type: 'LoginUserFail', payload: "Empty field"});
            }
            
            else{
                
            fetch('http://'+IP+':80/GGfiles/Ap/resendcodePass2.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            vall: vall,
            }),
            }).then((response) => response.json()).then(users => {
                
           if( typeof users.Id != 'undefined'){
               dispatch({type: 'LoginUserDone', payload: users});
            }
           else{
              dispatch({type: 'LoginUserFail', payload: users});
            }
            
            });
           }
          };
        };

    export const codePass2 = ({Name}) => {
    
            return (dispatch) => {
            dispatch({type: 'Login_user'});
            //console.log(Name);
            
            if(Name == '' || (typeof Name == 'undefined')   ){
                dispatch({type: 'LoginUserFail', payload: "Empty field"});
            }
            
            else{
                
            fetch('http://'+IP+':80/GGfiles/Ap/codePass2.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                 Name: Name,
            }),
            }).then((response) => response.json()).then(users => {
                
           if( typeof users.Id != 'undefined'){
               dispatch({type: 'LoginUserDone', payload: users});
            }
           else{
              dispatch({type: 'LoginUserFail', payload: users});
            }
            
            });
           }
          };
        };

        
    
    export const cn = ({Name,nname,Id}) => {
        return (dispatch) => {
            dispatch({type: 'Login_user'});
        if(Name == '' || (typeof Name == 'undefined')){
                dispatch({type: 'LoginUserFail', payload: "Empty Field"});
            }
        else{
            fetch('http://'+IP+':80/GGfiles/Ap/cn.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            Subname:Name,
            name: nname,
            Id: Id,
            }),
            }).then((response) => response.json()).then(users => {
           // dispatch({type: 'LoginUserFail', payload: users});
        if( typeof users.Id != 'undefined'){
               dispatch({type: 'LoginUserFaill'});
            }
           else{
              dispatch({type: 'LoginUserFail', payload: users});
            }
                
        });
       }
      };
    };
    
    export const fetchPro = ({vall}) => {
    return (dispatch) => {
    dispatch({type: 'Login_user2'});
    fetch('http://'+IP+':80/GGfiles/Ap/fetchele.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        Id: vall
    }),
    }).then((response) => response.json()).then(users => {
        
       dispatch({type: 'FetchDone', payload: users});
    });
   }
};


    export const chanegepic = ({Id}) => {
    
            return (dispatch) => {
            //dispatch({type: 'Login_user2'});
           
       
            let mime = 'image/jpg'

            ImagePicker.openPicker({
                width: 150,
                height: 150,
                includeBase64: true,
                cropping: true,
                mediaType: 'photo'
            }).then(image => {
                console.log(image.data);
               const imagePath = image.path
               
               RNFetchBlob.config({
    // add this option that makes response data to be stored as a file,
    // this is much more performant.
    fileCache : true,
  }).fetch('POST', 'http://'+IP+':80/GGfiles/Ap/saveim.php', {
                Authorization : "Bearer access-token",
                otherHeader : "foo",
                'Content-Type' : 'multipart/form-data',
              }, [
            
                { name : 'image',  filename : 'image.png', type:'image/jpg', data:RNFetchBlob.wrap(imagePath)},
                { name : 'Id', data : Id+"" }
              ]).then((resp) => {
                console.log(resp.text());
                  resp.flush()
                 dispatch({type: 'pic_changed', payload: "done"}); 
            
              }).catch((err) => {
                dispatch({type: 'pic_changed', payload: "done"});
                console.log(err)
            
              
      
              });

            })

            
       };
    };
    

    export const cn2 = ({Name}) => {
    
        return (dispatch) => {
            dispatch({type: 'Login_user'});
        
            if(Name == '' || (typeof Name == 'undefined')){
                dispatch({type: 'LoginUserFail', payload: "Empty Field"});
            }
        else{
            dispatch({type: 'LoginUserFaill'});
        }
      };
    };
    
    
    export const fetchclass = ({nname}) => {
            
        return (dispatch) => {
            dispatch({type: 'Login_user2'});
            fetch('http://'+IP+':80/GGfiles/Ap/step2.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                 name: nname
            }),
            }).then((response) => response.json()).then(users => {
               dispatch({type: 'FetchclaaDone', payload: users});
            });
           }
        };



    export const Addprofilecode = ({Id,password,password2}) => {
        return (dispatch) => {
          dispatch({type: 'Login_user'});
        if((typeof password== 'undefined') || password== '' || password2== '' || (typeof password2 == 'undefined')){
        dispatch({type: 'LoginUserFail', payload: "Empty Field"});
    }
    else{
     fetch('http://'+IP+':80/GGfiles/Ap/fetchclass.php', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
       
        Id: Id,
        code1: password,
        code2: password2,
    }),
    }).then((response) => response.json()).then(users => {
    if( typeof users.Id != 'undefined'){
       dispatch({type: 'LoginUserDone', payload: users});
    }
   else{
      dispatch({type: 'LoginUserFail', payload: users});
    }
    
    });
   }
  };
                
            };

export const codeChanged = (text) => {
    return{
        type: 'code_changed',
        payload: text
    };
};

export const codeChanged2 = (text) => {
    return{
        type: 'code_changed2',
        payload: text
    };
};

export const delpro = ({Id,Pid}) =>{
    return (dispatch) => {
                 dispatch({type: 'Login_user2'});
            
        fetch('http://'+IP+':80/GGfiles/Ap/delpro.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            activeRowPKey: Pid,
            activeRowKey:Id

            }),
            }).then((response) => response.json()).then(users => {
           /* fetch('http://'+IP+':80/GGfiles/Ap/fetchele.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Id: users
            }),
            }).then((response) => response.json()).then(users => {*/
               dispatch({type: 'FetchDone', payload: users});
            });
    }
  };



export const cn22 = ({nname,sub,Name,num}) => {
    
        return (dispatch) => {
        dispatch({type: 'Login_user'});
    
        if(Name == '' || (typeof Name == 'undefined' ) || typeof num == 'undefined'){
            dispatch({type: 'LoginUserFail', payload: "Empty Field"});
        }
        
        else{
            
        fetch('http://'+IP+':80/GGfiles/Ap/cn22.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        subname:sub,
        name: nname,
        Addsubjectt:Name,
        worth: num,
        }),
        }).then((response) => response.json()).then(users => {
    if( typeof users.Id != 'undefined'){
           dispatch({type: 'LoginUserFaill'});
        }
       else{
          dispatch({type: 'LoginUserFail', payload: users});
        }
            
    });
   }
  };
};

export const savePro = (id, val) => {
      let profile = {id, val}
        return (dispatch) => {
        dispatch({type: 'profile_Saved', payload:profile });
      };
    };