import Authenticated from "@/Layouts/Authenticated/Index";
import { usePage } from '@inertiajs/react';
import { Head, useForm } from '@inertiajs/react';
import Input from '@/Components/TextInput';
import Label from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";

export default function Create() {
  const { auth } = usePage().props;

  const { setData, post, processing, errors } = useForm({
    name: '',
    category: '',
    video_url: '',
    thumbnail: '',
    rating: '',
    is_featured: false,
  });

  const handleOnChange = (event) => {
    setData(event.target.name, event.target.type === 'file' ? event.target.files[0] : event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    post(route('admin.dashboard.movie.store'));
  };

  return <Authenticated auth={auth}>
    <Head title="Admin - Create Movie"/>
    <h1 className="text-xl">Insert a new Movie</h1>
    <hr className="mb-4" />

    <form onSubmit={submit}>
      <Label forInput="name" value="Name"/>
      <Input 
        type="text"
        name="name"
        variant="primary-outline"
        onChange={handleOnChange}
        placeholder="Enter the name of the movie"
      />
      <InputError message={errors.name} className="mt-2" />

      <Label forInput="category" value="Category" className="mt-4"/>
      <Input 
        type="text"
        name="category"
        variant="primary-outline"
        onChange={handleOnChange}
        placeholder="Enter the category name"
      />
      <InputError message={errors.category} className="mt-2" />

      <Label forInput="video_url" value="Video URL" className="mt-4"/>
      <Input 
        type="text"
        name="video_url"
        variant="primary-outline"
        onChange={handleOnChange}
        placeholder="Enter video URL"
      />
      <InputError message={errors.video_url} className="mt-2" />

      <Label forInput="thumbnail" value="Thumbnail" className="mt-4"/>
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