import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'

const QuestionsBuilder = ({questions}) => {

    console.log("Below are questions")
    console.log(questions)

    const randomAnswer = Math.floor(Math.random() * questions.length )
    console.log(randomAnswer);
    
    let arr = questions.map((element) => [
        element["name"],
        element["image_link"]
    ])
    
    console.log(arr);

    if(arr.length == 0) {
        return;
    }

  return (
    <div>
    {<Image image={arr[randomAnswer][1]}></Image>}
    </div>
  )
}

QuestionsBuilder.propTypes = {}

export default QuestionsBuilder