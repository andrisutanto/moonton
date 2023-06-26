import Authenticated from "@/Layouts/Authenticated/Index";
import SubscriptionCard from "@/Components/SubscriptionCard";
import {Head} from '@inertiajs/react';
import { router } from '@inertiajs/react'

export default function SubscriptionPlan({auth, SubscriptionPlans}) {
	const selectSubscription = id => {
		//alert(id);
		// sample of manual visit in inertia
		router.post(route("user.dashboard.subscriptionPlan.userSubscribe", {subscriptionPlan: id}));
	}

	return(
		<>
	<Head title='Subscription Plan' />
	<Authenticated user={auth.user}>
		<div className="mx-auto max-w-screen hidden lg:block">
			
				<div className="py-20 flex flex-col items-center">
					<div className="text-black font-semibold text-[26px] mb-3">
						Pricing for Everyone
					</div>
					<p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
						Invest your little money to get a whole new experiences from movies.
					</p>

					<div className="flex justify-center gap-10 mt-[70px]">
						{SubscriptionPlans.map((SubscriptionPlan) => (
							<SubscriptionCard 
								name={SubscriptionPlan.name}
								price={SubscriptionPlan.price}
								durationInMonth={SubscriptionPlan.active_period_in_months}
								features={JSON.parse(SubscriptionPlan.features)}
								isPremium={SubscriptionPlan.name === 'Premium'}
								key={SubscriptionPlan.id}
								onSelectSubscription={() => selectSubscription(SubscriptionPlan.id)}
							/>
						))}
					</div>

				</div>
			

		</div>
	</Authenticated>
	</>
	);
}