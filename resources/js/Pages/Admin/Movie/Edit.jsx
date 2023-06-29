import Authenticated from "@/Layouts/Authenticated/Index";
import { usePage } from '@inertiajs/react';
import { Head, useForm } from '@inertiajs/react';
import Input from '@/Components/TextInput';
import Label from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";
import { router } from "@inertiajs/react";

export default function Edit({movie}) {
  const { auth } = usePage().props;

  const { data, setData, post, processing, errors } = useForm({
    ...movie,
  });

  const handleOnChange = (event) => {
    setData(event.target.name, event.target.type === 'file' ? event.target.files[0] : event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    if(data.thumbnail === movie.thumbnail){
      delete data.thumbnail;
    }

    router.post(route("admin.dashboard.movie.update", movie.id), {
      _method: "PUT",
      ...data
    });

    //post(route('admin.dashboard.movie.store'));
  };

  return <Authenticated auth={auth}>
    <Head title="Admin - Create Movie"/>
    <h1 className="text-xl">Update Movie: {movie.name}</h1>
    <hr className="mb-4" />

    <form onSubmit={submit}>
      <Label forInput="name" value="Name"/>
      <Input 
        type="text"
        name="name"
        defaultValue={movie.name}
        variant="primary-outline"
        onChange={handleOnChange}
        placeholder="Enter the name of the movie"
      />
      <InputError message={errors.name} className="mt-2" />

      <Label forInput="category" value="Category" className="mt-4"/>
      <Input 
        type="text"
        name="category"
        defaultValue={movie.category}
        variant="primary-outline"
        onChange={handleOnChange}
        placeholder="Enter the category name"
      />
      <InputError message={errors.category} className="mt-2" />

      <Label forInput="video_url" value="Video URL" className="mt-4"/>
      <Input 
        type="text"
        name="video_url"
        defaultValue={movie.video_url}
        variant="primary-outline"
        onChange={handleOnChange}
        placeholder="Enter video URL"
      />
      <InputError message={errors.video_url} className="mt-2" />

      <Label forInput="thumbnail" value="Thumbnail" className="mt-4"/>
      <img src={`/storage/${movie.thumbnail}`} alt="" className="w-40"/>
      <Input 
        type="file"
        name="thumbnail"
        variant="primary-outline"
        onChange={handleOnChange}
        placeholder="Insert thumbnail of the movie"
      />
      <InputError message={errors.thumbnail} className="mt-2" />

      <Label forInput="rating" value="Rating" className="mt-4"/>
      <Input 
        type="number"
        name="rating"
        defaultValue={movie.rating}
        variant="primary-outline"
        onChange={handleOnChange}
        placeholder="Enter movie rating"
      />
      <InputError message={errors.rating} className="mt-2" />

      <div className="flex flex-row mt-4 items-center">
        <Label forInput="is_featured" value="Is Featured" className="mt-4 mr-3"/>
        <Checkbox
          name="is_featured"
          onChange={(e) =>
            setData("is_featured", e.target.checked)
          }
          checked={movie.is_featured}
        />
      </div>

      <Button
        type="submit"
        className="mt-4"
        processing={processing}
      >
        Save
      </Button>
    </form>
  </Authenticated>;
}