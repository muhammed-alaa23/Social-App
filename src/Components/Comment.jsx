import React, { useContext, useState } from 'react'
import userPlaceholder from '../assets/userPlaceholder.jpg';
import { addToast, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@heroui/react';
import { AuthContext } from '../contexts/AuthContext';
import { deleteCommentApi } from '../services/postServices';
import { UpdateCommentApi } from '../services/commentAServices';


export default function Comment({comment,posts ,displayPosts , callBack}) {

  const [moreComments, setmoreComments] = useState(5);
  const [isPostDeleting, setIsPostDeleting] = useState(false);
  const [isCommentUpdated, setIsCommentUpdated] = useState(false);
  const [onEditMode, setOnEditMode] = useState(true);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {userData} = useContext(AuthContext);
  const [commentContent, setCommentContent] = useState(comment.content);





  async function handleUpdateComment() {
    setIsCommentUpdated(true);
    const response = await UpdateCommentApi(comment._id, commentContent);
    if (response.message == "success") {
      await callBack();
      setIsCommentUpdated(false);
      addToast({
        title: "Comment Updated Successfully",
        timeout: 2000,
        color: "success",
        variant: "bordered",
      });
    }
  }


    async function handleDeletecomment(onClose) {
        setIsPostDeleting(true);
        const response = await deleteCommentApi(comment._id);
        console.log(response);
        if (response.message == "success") {
          await callBack();
          setIsPostDeleting(false);
          onClose();
          addToast({
            title: "Comment Deleted Successfully",
            timeout: 2000,
            color: "success",
            variant: "bordered",
          })
        }
      }


  function handleLoadMore() {
    setIsLoading(true);
    setTimeout(() => {
      setmoreComments(moreComments + 5);
      setIsLoading(false);
    }, 200);
  }


  return (
    <div className=' bg-gray-100 mb-0.5 py-4 px-8 mx-[-16px] relative  '>
    <div className="flex flex-col justify-between ">
        <div className="gap-3.5	flex items-center mt-3 ">
            <img onError={(e) => { e.target.src = userPlaceholder }} src={comment.commentCreator.photo} className="object-cover	rounded-full w-10 h-10" />
            <div className="flex flex-col">
              <b className="mb-2 capitalize">{comment.commentCreator.name}</b>
              <time dateTime="06-08-21" className="text-gray-400 text-xs">{comment.createdAt}</time>
            </div>
          </div>
            {onEditMode ?
            <p className='py-2 ps-12'>{comment.content}</p>
            :<div className='ps-10 mt-2'>
              <Input isDisabled={isCommentUpdated} value={commentContent} onChange={(e) => setCommentContent(e.target.value)} variant='bordered' />
              <div className='flex justify-end mt-2 gap-2'>
                <Button  color="default" variant='bordered'  onPress={() => setOnEditMode(true)}>cancel</Button>
                <Button isDisabled={commentContent.trim().length < 2} isLoading={isCommentUpdated} color="primary" onPress={handleUpdateComment}>Update</Button>
              </div>
            </div>}
           
      </div>
       {comment.commentCreator._id == userData._id && <div className='absolute top-6 right-5 '><Dropdown>
        <DropdownTrigger>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="34px" fill="#92929D" className='outline-none w-fit rotate-90 cursor-pointer'>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem onPress={() => setOnEditMode(false)} key="edit">Edit</DropdownItem>
          <DropdownItem onPress={onOpen} key="delete" className="text-danger" color="danger">
            Delete
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>}


      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Delet</ModalHeader>
              <ModalBody>
                
                <p>
                  Are you sure you want to delete this Comment? This action cannot be undone.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="danger" isLoading={isPostDeleting} onPress={() => handleDeletecomment(onClose)}>
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
          </div>
          
  )
}
