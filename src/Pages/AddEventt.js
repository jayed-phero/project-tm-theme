import { format } from 'date-fns';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AddEventForm from './AddEventForm';

const AddEventt = () => {
    const { register, handleSubmit } = useForm()
    const [startingDate, setStartingDate] = useState(new Date())
    const [finishingDate, setFinishingDate] = useState(new Date(startingDate.getTime() + 24 * 60 * 60 * 1000))

    const handleAddEvent = data => {
        const start = format(startingDate, 'P')
        const to = format(finishingDate, 'P')
        const title = data.title;
        const image = data.image[0]
        const description = data.description
        const price = data.price
        const address = data.address
        const content1 = data.content1
        const content2 = data.content2
        const content3 = data.content3
        const content4 = data.content4
        const content5 = data.content5

        // getImageUrl(image)
            // .then(data => {
            //     console.log(data)
            //     const eventData = {
            //         start,
            //         to,
            //         title,
            //         image: data,
            //         description,
            //         price,
            //         address,
            //         content: [
            //             { content: content1 },
            //             { content: content2 },
            //             { content: content3 },
            //             { content: content4 },
            //             { content: content5 }
            //         ]
            //     }
            // })
            // .catch(err => console.log(err))

    }
    return (
        <div>
            <AddEventForm
                register={register}
                handleSubmit={handleSubmit}
                handleAddEvent={handleAddEvent}
                startingDate={startingDate}
                finishingDate={finishingDate}
                setStartingDate={setStartingDate}
                setFinishingDate={setFinishingDate}
            ></AddEventForm>
        </div>
    );
};

export default AddEventt;