import { NextRequest, NextResponse } from "next/server";

// DB and models
import jobModel from "@/app/models/JobModel";
import connectDB from "@/utils/connectDB";
import extractQueryParams from "../../../utils/server/extractQueryParams";
import formatQueryParams from "@/utils/server/formatQuery";

const jobs = [
  {
    "title": "Marketing Coordinator",
    "description": "Support the marketing team in executing campaigns, managing social media, and conducting market research for PepsiCo's latest products. Collaborate with different departments to ensure campaigns run smoothly and are aligned with the brand’s goals.",
    "company": {
      "name": "PepsiCo",
      "image": "https://i.pinimg.com/564x/90/62/38/90623855fba17c19d0411c539f646378.jpg"
    },
    "location": "Onsite",
    "salary": "$50,000 - $65,000",
    "status": "active",
    "jobType": "Full-time",
    "skills": ["Marketing", "Social Media", "Content Creation"],
    "experienceLevel": "Mid",
    "education": "bachelor",
    "requirements": ["2+ years in marketing", "Strong organizational skills"],
    "tags": ["Marketing", "Campaign Management", "Branding"],
    "applicantsCount": 40
  },
  {
    "title": "Financial Analyst",
    "description": "Analyze financial data, develop forecasts, and assist in the development of long-term financial plans for Goldman Sachs. You'll also prepare reports for senior management to help inform investment and budgeting decisions.",
    "company": {
      "name": "Goldman Sachs",
      "image": "https://cdn.mos.cms.futurecdn.net/6YFp5kp5q8bkHZmUdfFhtP-1200-80.jpg"
    },
    "location": "Hybrid",
    "salary": "$80,000 - $100,000",
    "status": "active",
    "jobType": "Full-time",
    "skills": ["Financial Analysis", "Excel", "Budgeting", "Forecasting"],
    "experienceLevel": "Mid",
    "education": "bachelor",
    "requirements": ["3+ years in financial analysis", "Strong analytical skills"],
    "tags": ["Finance", "Analysis", "Investment"],
    "applicantsCount": 20
  }
,
{
  "title": "Human Resources Manager",
  "description": "Manage the HR functions at Coca-Cola, including recruitment, employee relations, and compliance with labor laws. You'll lead a team responsible for hiring, performance management, and employee engagement across various departments.",
  "company": {
    "name": "Coca-Cola",
    "image": "https://i.pinimg.com/564x/45/1d/df/451ddf96e958c635948cd88c29892565.jpg"
  },
  "location": "Onsite",
  "salary": "$75,000 - $95,000",
  "status": "active",
  "jobType": "Full-time",
  "skills": ["HR Management", "Recruitment", "Employee Relations"],
  "experienceLevel": "Senior",
  "education": "bachelor",
  "requirements": ["5+ years in HR management", "Strong leadership skills"],
  "tags": ["Human Resources", "Management", "Recruitment"],
  "applicantsCount": 30
}
,
{
  "title": "Supply Chain Analyst",
  "description": "Optimize Walmart's supply chain processes by analyzing data, identifying inefficiencies, and recommending improvements. You’ll be responsible for tracking inventory levels, forecasting demand, and working with vendors to streamline product delivery.",
  "company": {
    "name": "Walmart",
    "image": "https://i.pinimg.com/564x/cd/7e/4e/cd7e4ee6916c64d1018400baa25f2b3f.jpg"
  },
  "location": "Onsite",
  "salary": "$60,000 - $80,000",
  "status": "active",
  "jobType": "Full-time",
  "skills": ["Supply Chain Management", "Data Analysis", "Vendor Relations"],
  "experienceLevel": "Mid",
  "education": "bachelor",
  "requirements": ["2+ years in supply chain management", "Strong analytical skills"],
  "tags": ["Supply Chain", "Logistics", "Inventory Management"],
  "applicantsCount": 25
}
,
{
  "title": "Sales Manager",
  "description": "Lead Tesla's sales team to meet or exceed monthly and quarterly sales targets. You'll be responsible for developing and executing sales strategies, managing customer relationships, and overseeing the performance of sales representatives.",
  "company": {
    "name": "Tesla",
    "image": "https://i.pinimg.com/564x/f9/52/bd/f952bd901857bcb6006d8c73f52cb07d.jpg"
  },
  "location": "Hybrid",
  "salary": "$100,000 - $130,000",
  "status": "active",
  "jobType": "Full-time",
  "skills": ["Sales Management", "Customer Relationship", "Strategy Development"],
  "experienceLevel": "Senior",
  "education": "bachelor",
  "requirements": ["5+ years in sales management", "Strong leadership skills"],
  "tags": ["Sales", "Management", "Customer Relations"],
  "applicantsCount": 15
},

{
  "title": "Flight Attendant",
  "description": "Provide exceptional service to passengers while ensuring safety and comfort throughout Delta Airlines flights. Responsibilities include performing safety checks, attending to passenger needs, and maintaining a positive flying experience.",
  "company": {
    "name": "Delta Airlines",
    "image": "https://i.pinimg.com/564x/75/dc/76/75dc76fb4310f472244c2fd32ba8ee8c.jpg"
  },
  "location": "Onsite",
  "salary": "$35,000 - $50,000",
  "status": "active",
  "jobType": "Full-time",
  "skills": ["Customer Service", "Safety Procedures", "Communication"],
  "experienceLevel": "Entry",
  "education": "highschool",
  "requirements": ["Excellent communication skills", "Ability to work under pressure"],
  "tags": ["Customer Service", "Safety", "Travel"],
  "applicantsCount": 300
},
{
  "title": "Retail Store Manager",
  "description": "Lead a Nike retail store by managing staff, ensuring excellent customer service, and driving sales performance. Responsibilities include inventory management, staff scheduling, and training new employees to deliver the Nike brand experience.",
  "company": {
    "name": "Nike",
    "image": "https://i.pinimg.com/736x/85/74/97/857497754fa79d540e5d8bba1933bdfb.jpg"
  },
  "location": "Onsite",
  "salary": "$55,000 - $70,000",
  "status": "active",
  "jobType": "Full-time",
  "skills": ["Retail Management", "Customer Service", "Inventory Management"],
  "experienceLevel": "Mid",
  "education": "associate",
  "requirements": ["3+ years in retail management", "Leadership skills"],
  "tags": ["Retail", "Management", "Customer Service"],
  "applicantsCount": 50
},
{
  "title": "Event Planner",
  "description": "Coordinate and execute corporate and social events at Hilton Hotels. Work with clients to understand their vision, create budgets, and manage vendors to ensure a seamless event experience. This role requires creativity and attention to detail.",
  "company": {
    "name": "Hilton Hotels",
    "image": "https://i.pinimg.com/564x/cc/42/04/cc42047998b683cca6bb3486d223afc8.jpg"
  },
  "location": "Onsite",
  "salary": "$60,000 - $75,000",
  "status": "active",
  "jobType": "Full-time",
  "skills": ["Event Planning", "Budgeting", "Vendor Management"],
  "experienceLevel": "Mid",
  "education": "bachelor",
  "requirements": ["2+ years in event planning", "Strong organizational skills"],
  "tags": ["Event Planning", "Hospitality", "Customer Service"],
  "applicantsCount": 20
},
{
  "title": "Nurse",
  "description": "Provide patient care in a hospital setting at Mayo Clinic. You will be responsible for administering medication, monitoring vital signs, and coordinating with doctors to ensure the highest quality care for patients.",
  "company": {
    "name": "Mayo Clinic",
    "image": "https://i.pinimg.com/564x/36/cc/af/36ccafe73e802e5cc5b2b2268ee558f1.jpg"
  },
  "location": "Onsite",
  "salary": "$65,000 - $85,000",
  "status": "active",
  "jobType": "Full-time",
  "skills": ["Nursing", "Patient Care", "Medication Administration"],
  "experienceLevel": "Mid",
  "education": "bachelor",
  "requirements": ["Nursing license", "3+ years in a hospital setting"],
  "tags": ["Healthcare", "Nursing", "Patient Care"],
  "applicantsCount": 100
}
,
{
  "title": "Public Relations Specialist",
  "description": "Manage public relations efforts for Disney, ensuring positive media coverage and protecting the company's brand image. Responsibilities include writing press releases, coordinating media events, and building relationships with journalists.",
  "company": {
    "name": "Disney",
    "image": "https://i.pinimg.com/736x/d4/1e/e2/d41ee24c13ec89901e118a8d5b1f6200.jpg"
  },
  "location": "Hybrid",
  "salary": "$70,000 - $90,000",
  "status": "active",
  "jobType": "Full-time",
  "skills": ["Public Relations", "Media Relations", "Event Planning"],
  "experienceLevel": "Mid",
  "education": "bachelor",
  "requirements": ["3+ years in PR", "Excellent writing skills"],
  "tags": ["Public Relations", "Media", "Communications"],
  "applicantsCount": 30
}

  
]

export const GET = async (req: NextRequest) => {
  // Acces all available query params
  const searchParams = req.nextUrl.searchParams
  
  try {
    const queryParams = extractQueryParams(searchParams);
    const {formattedQuery, limit, page } = formatQueryParams(queryParams);

    console.log("query", limit, page);
    

     // Convert limit and page to numbers (they come as strings from query params)
     const limitNumber = parseInt(limit);
     const pageNumber = parseInt(page);

    // Connect to DB
    await connectDB();

    // await jobModel.insertMany(jobs).then(()=> {
    //   console.log("Jobs added sccess ✅✅");
      
    // })

    // Find all jobs
    let foundJobs = await jobModel.find(formattedQuery)
      .skip(((pageNumber - 1) * limitNumber))
      .limit(limitNumber)
      .sort({ createdAt: -1 }) // Sort by createdAt in descending order
      .exec();


    return NextResponse.json({ data: foundJobs, page: pageNumber, limit: limitNumber }, { status: 200 });
  } catch (err) {
    console.log("Error fetching jobs", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
