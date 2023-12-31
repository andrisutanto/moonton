import Authenticated from "@/Layouts/Authenticated/Index";
import Button from "@/Components/Button";
import { Link, Head, useForm } from "@inertiajs/react";
import { usePage } from '@inertiajs/react';
import FlashMessage from "@/Components/FlashMessage";


export default function Index({ movies }) {
  const { auth } = usePage().props;
  const { flashMessage } = usePage().props;
  const { delete: destroy, put } = useForm();
  //console.log(flashMessage);

  return (
    <Authenticated auth={auth.user.name}>
      <Head title="List of Movies"/>
      <Link href={route("admin.dashboard.movie.create")}>
        <Button type="button" className="w-40 mb-8">
          Insert New Movie
        </Button>
      </Link>
      {flashMessage?.message && (
        <FlashMessage message={flashMessage.message}/>
      )}
      <table className="table-fixed w-full text-center">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Rating</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie.id}>
              <td>
                <img src={`/storage/${movie.thumbnail}`} className="w-32 rounded-md" />
              </td>
              <td>{movie.name}</td>
              <td>{movie.category}</td>
              <td>{movie.rating.toFixed(1)}</td>
              <td>
                <Link href={route('admin.dashboard.movie.edit', movie.id)}>
                  <Button type="button" variant="warning">
                    Edit
                  </Button>
                </Link>
              </td>
              <td>
                <div onClick={() => {
                  movie.deleted_at ? put(route('admin.dashboard.movie.restore', movie.id)) : 
                  destroy(route('admin.dashboard.movie.destroy', movie.id));
                }}>
                  <Button type="button" variant="danger">
                    {movie.deleted_at ? "Restore" : "Delete"}
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Authenticated>
  );
}