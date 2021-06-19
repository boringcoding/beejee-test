import React, { FC } from 'react'
import classNames from 'classnames'
import { Message as MessageProps } from '../models/Message'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators, State } from '../store'
import { bindActionCreators } from 'redux'

export const Messages = () => {
  const appStore = useSelector((state: State) => state.app)

  if (!appStore.messages.length) {
    return null
  }

  return (
    <div className="max-w-md fixed bottom-0 w-full transform -translate-x-1/2 left-1/2">
      {appStore.messages.map((message: MessageProps) => (
        <Message {...message} key={message.id} />
      ))}
    </div>
  )
}

const Message: FC<MessageProps> = ({ id, text, type }) => {
  const dispatch = useDispatch()
  const { removeMessage } = bindActionCreators(actionCreators, dispatch)

  return (
    <div
      onClick={() => removeMessage(id)}
      className={classNames('p-2 rounded-md text-white cursor-pointer my-1 flex justify-between items-center', {
        'bg-red-500': type === 'error',
        'bg-green-500': type === 'info',
      })}
    >
      <span>{text}</span>
      <span className="flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492" className="w-4 h-4">
          <path
            d="M300.188 246L484.14 62.04c5.06-5.064 7.852-11.82 7.86-19.024 0-7.208-2.792-13.972-7.86-19.028L468.02 7.872C462.952 2.796 456.196.016 448.984.016c-7.2 0-13.956 2.78-19.024 7.856L246.008 191.82 62.048 7.872C56.988 2.796 50.228.016 43.02.016c-7.2 0-13.96 2.78-19.02 7.856L7.872 23.988c-10.496 10.496-10.496 27.568 0 38.052L191.828 246 7.872 429.952C2.808 435.024.02 441.78.02 448.984c0 7.204 2.788 13.96 7.852 19.028l16.124 16.116c5.06 5.072 11.824 7.856 19.02 7.856 7.208 0 13.968-2.784 19.028-7.856l183.96-183.952 183.952 183.952c5.068 5.072 11.824 7.856 19.024 7.856h.008c7.204 0 13.96-2.784 19.028-7.856l16.12-16.116c5.06-5.064 7.852-11.824 7.852-19.028 0-7.204-2.792-13.96-7.852-19.028L300.188 246z"
            fill="#fff"
          />
        </svg>
      </span>
    </div>
  )
}
