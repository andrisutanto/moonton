import Authenticated from "@/Layouts/Authenticated/Index";
import Button from "@/Components/Button";
import { Link } from "@inertiajs/react";
import { usePage } from '@inertiajs/react';
import FlashMessage from "@/Components/FlashMessage";


export default function Index({ }) {
  const { auth } = usePage().props;
  const { flashMessage } = usePage().props;
  console.log(flashMessage);

  return (
    <Authenticated auth={auth.user.name}>
      <Link href={route("admin.dashboard.movie.create")}>
        <Button type="button" className="w-40 mb-8">
          Insert New Movie
        </Button>
      </Link>
      {flashMessage?.message && (
        <FlashMessage message={flashMessage.message}/>
      )}
    </Authenticated>
  );
}