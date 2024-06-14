import SectionWrapper from "./SectionWrapper.jsx";
import ExerciseCard from "./Templates/ExerciseCard.jsx";

export default function Workout({workout, id}){
    return(
        <SectionWrapper id={id} header="Welcome to" title={['The', 'DANGER' , 'zone']}>
            <div className="flex flex-col gap-4">
                {workout.map((exercise,i) => {
                    return(
                        <ExerciseCard key = {i} exercise = {exercise} index = {i}/>
                    );
                })}
            </div>

        </SectionWrapper>
    );
}