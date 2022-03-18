import { useQuery } from '@apollo/client';
import { ALL_MOVIES } from '../../gqlOperation/gqlQuery'

const Movie = () => {
    const { loading, error, data } = useQuery(ALL_MOVIES);
    console.log({ loading, error, data })

    return (
        <h1>ttttttttt</h1>
    )
}
export default Movie;