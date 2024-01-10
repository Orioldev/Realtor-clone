import React, { useState } from 'react';
import { getAuth, updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore'
import { toast } from 'react-toastify';
import { db } from '../firebase';

export const Profile = () => {

  const auth = getAuth()
  const navigate = useNavigate();
  const [ changeDetail, setChangeDetail ] = useState( false );

  const [ formData, setFormData ] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })

  const { name, email } = formData;

  const onLogout = () => {
    auth.signOut();
    navigate('/');
  }

  const onChange = ({ target }) => {
    setFormData( ( prevState ) => ({
      ...prevState,
      [ target.id ] : target.value
    }))
  }

  const onSubmit = async () => {
    try {

      if ( auth.currentUser.displayName !== name ) {
        // update display name in irebase auth
        await updateProfile( auth.currentUser, {
          displayName: name
        });

        //update name in the firestore
        const docRef = doc( db, "users", auth.currentUser.uid );
        await updateDoc( docRef, {
          name,
        })
      }
      toast.success("Profile details update")

    } catch (error) {
      toast.error('Could not update profile details')
    }
  }


  return (
    <>
      <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
        <h1 className='text-3xl text-center mt-6 font-bold'>My Profile</h1>
        <div className='w-full md:w-[50%] mt-6 px-3'>
          <form>
            {/* Name input */}

            <input className={`mb-6 w-full 
                              px-4 py-2 
                              text-xl 
                              text-gray-700 
                              bg-white border 
                              border-gray-300 
                              rounded 
                              transition ease-in-out
                              ${ changeDetail ? 'bg-red-200 focus:bg-red-200' : '' }`}

                              type="text" 
                              id='name' 
                              value={ name } 
                              disabled={ !changeDetail }
                              onChange={ onChange }
            />

            {/* Email input */}

            <input className='mb-6 w-full 
                              px-4 py-2 
                              text-xl 
                              text-gray-700 
                              bg-white border 
                              border-gray-300 
                              rounded 
                              transition ease-in-out' 

                              type="email" 
                              id='email' 
                              value={ email } 
                              disabled 
            />

            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='flex items-center'>Do you want to change your name?
                <span className='text-red-600 
                                hover:text-red-700 
                                transition 
                                ease-in-out 
                                duration-200 
                                ml-1 
                                cursor-pointer'
                                onClick={ () => {
                                  changeDetail && onSubmit();
                                  setChangeDetail( ( prevState ) => !prevState ) 
                                }}
                >
                                 { changeDetail ? 'Apply change' : 'Edit' }
                </span>
              </p>
              <p className='bg-red-400 
                          text-white p-2 
                          rounded 
                          cursor-pointer 
                          ml-5 
                          hover:text-blue-800 
                          transition 
                          duration-200 
                          ease-in-out'

                          onClick={ onLogout }
              >
                            
                            Log Out
              </p>
            </div>

          </form>
        </div>
      </section>
    </>
  

  )
}
