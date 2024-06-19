                                                            ## 11004310 Student at UG: Fabrice IHONGUI
 #This is a React Native application that displays job listings. 
 #It includes featured and popular job sections with each job card displaying specific details like title,
 #company, salary, location, and an image.
 #The HomeScreen component renders the main view of the application.
   #Components
HomeScreen
This component is the main screen of the application. It displays the user's name and email at the top, a search bar, and two sections: Featured Jobs and Popular Jobs.

Props:
route: Contains the name and email of the user, passed as parameters.
               import HomeScreen from "./screens/HomeScreen";
FeaturedJobCard
This component represents a card for a featured job. Each card shows the job's title, company, salary, location, and a logo/image. The background color of each card is dynamic based on the job data.

Props:
job: An object containing the job details (id, title, company, salary, location, background, image).
import FeaturedJobCard from "../components/FeaturedJobCard";

<FeaturedJobCard key={job.id} job={job} />
PopularJobCard
This component represents a card for a popular job. Each card shows the job's title, company, salary, location, and a logo/image.

Props:
job: An object containing the job details (id, title, company, salary, location, image).
import PopularJobCard from "../components/PopularJobCard";

<PopularJobCard key={job.id} job={job} />
## LET' TAKE A SCREENSHOT
![image](https://github.com/Ihongui/rn-assignment4-11004310/assets/150761912/f6cc6d05-4964-4438-ba0a-42ae609d0705)
![image](https://github.com/Ihongui/rn-assignment4-11004310/assets/150761912/689c83f7-1ba0-4377-b6d3-357941d59ece)
![image](https://github.com/Ihongui/rn-assignment4-11004310/assets/150761912/c7f24773-b06b-4130-ab4c-663d46a5ca1d)
![image](https://github.com/Ihongui/rn-assignment4-11004310/assets/150761912/f0d1a5e6-56c0-4557-8a0c-d7f13eceeb6a)
![image](https://github.com/Ihongui/rn-assignment4-11004310/assets/150761912/c74d734b-577c-4cd8-8ed8-22ff5f359a46)
![image](https://github.com/Ihongui/rn-assignment4-11004310/assets/150761912/22685ef1-763f-4f90-b272-c208236e8991)
![image](https://github.com/Ihongui/rn-assignment4-11004310/assets/150761912/2bdb620f-eeed-444c-90df-49c31666853b)
![image](https://github.com/Ihongui/rn-assignment4-11004310/assets/150761912/5bc325a1-4208-4625-a692-9d96623e5fe4)








