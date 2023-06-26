<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SubscriptionPlan;
use Auth;
use Carbon\Carbon;
use App\Models\UserSubscription;

class SubscriptionPlanController extends Controller
{
    public function index(){
        $subscriptionPlans = SubscriptionPlan::all();
        return inertia('User/Dashboard/SubscriptionPlan/Index', [
            'SubscriptionPlans' => SubscriptionPlan::all(),
        ]);
    }

    public function userSubscribe(Request $request, SubscriptionPlan $subscriptionPlan){
        //return $subscriptionPlan;
        // protected $fillable = [
        //     'user_id',
        //     'subscription_plan_id',
        //     'price',
        //     'expired_date',
        //     'payment_status',
        //     'snapToken'
        // ];

        $data = [
            'user_id' => Auth::id(),
            'subscription_plan_id' => $subscriptionPlan->id,
            'price' => $subscriptionPlan->price,
            'expired_date' => Carbon::now()->addMonths($subscriptionPlan->active_period_in_months),
            'payment_status' => 'paid',
        ];

        $userSubscription = UserSubscription::create($data);

        return redirect(route('user.dashboard.index'));
    }
}
