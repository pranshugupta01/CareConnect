# CareConnect
Empowering hope in dark moments.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Setup](#setup)
- [Supported Platforms](#supported-platforms)
- [Dependencies and Technologies](#dependencies-and-technologies)
- [Configuration](#configuration)
- [Usage Examples](#usage-examples)
- [Security and Privacy](#security-and-privacy)
- [Future Plans](#future-plans)
- [Contact Information](#contact-information)


## Overview
CareConnect is a browser extension designed to provide compassionate support and assistance to users who may be going through difficult emotional times. The extension monitors the user's browsing activities and messages, detecting distress signals related to depression and suicidal thoughts. When necessary, the extension offers a chatbot for emotional support or reaches out to the user's loved ones or relevant helpline services to ensure their well-being.

The project is built using JavaScript, Node.js,Python and Flask. It utilizes Google Cloud credits for its functionalities to work.


## Features
- Real-time monitoring of browsing activities for signs of distress.
- Detection of keywords and phrases related to depression and suicidal thoughts.
- Interactive chatbot for offering support and suggestions to users with a lower suicidal risk level.
- Notification system to alert designated contacts or helpline services using email or whatsapp message for users with a higher suicidal risk level.
- Secure and privacy-conscious implementation to protect user data.
- That's an excellent feature to ensure users receive the appropriate support and intervention based on the detected level of depression. Here's an example usage scenario showcasing how this feature can work:


## Installation
1. Clone the repository to your local machine using the following command:
   git clone https://github.com/pranshugupta01/CareConnect.git

2. Navigate to the project directory:
   cd CareConnect

3. Install the required dependencies:
   npm install

4. Install modules from requirements.txt file using command :
   pip install -r requirements.txt 


## Setup
1. Open Google Chrome.
2. Go to `chrome://extensions/` in your browser.
3. Enable Developer Mode in the top right corner.
4. Click on "Load Unpacked" and select the `CareConnect` folder from your local machine.
5. The extension should now be installed and ready to use.


## Configuration

Before using Care Connect, you will need to set up a connection with Google Dialogflow using Google credits. Dialogflow is utilized for the chatbot functionality, providing compassionate support to users.

Follow the steps below to configure the integration:

1. **Get Google Dialogflow API Credentials:**
   - If you don't already have a Google Cloud account, sign up for one [here](https://cloud.google.com/).
   - Create a new project and navigate to the Dialogflow console.
   - Enable the Dialogflow API and set up the necessary permissions for your project.

2. **Set Environment Variables:**
   - Obtain your Google Dialogflow API credentials, including the client ID and API key.
   - Set these credentials as environment variables in the project. You can do this by creating a `.env` file in the root directory of the project and adding the credentials in the following format:
     ```
     DIALOGFLOW_CLIENT_ID=your_dialogflow_client_id
     DIALOGFLOW_API_KEY=your_dialogflow_api_key
     ```
   - Make sure to add the `.env` file to your `.gitignore` to keep sensitive information secure.

3. **Connect with Google Dialogflow:**
   - In the appropriate part of the code (where chatbot functionality is invoked), establish a connection with Google Dialogflow using the credentials loaded from the environment variables.

Please note that the usage of Google Dialogflow requires Google credits, which you can obtain through the Google Cloud platform. Ensure you have adequate credits to use Dialogflow as part of the Care Connect extension.


## Supported Platforms
- Google Chrome, Brave Browser, Edge, Firefox
- Operating Systems: Windows, macOS, Linux


## Dependencies and Technologies
- JavaScript
- Python
- Jupyter Notebook
- Flask


## Usage Examples

**Scenario: A User Seeking Emotional Support**

1. **User Interaction:**
   The user interacts with the browser extension, entering lines of text in various messages or search queries.

2. **Line Analysis:**
   As the user types or submits each line with a full stop at the end, Care Connect performs an analysis of the text using the machine learning model.

3. **Depression Level Detection:**
   The machine learning model evaluates the content of the line and assigns a depression level score. If the score is below 80%, indicating a lower risk of depression, the process continues to the next line.

4. **Chatbot Intervention:**
   If the depression level is detected to be less than 80%, Care Connect triggers the appearance of the chatbot. The chatbot offers comforting responses, encouraging the user to talk about their feelings and providing appropriate emotional support. The chatbot may also suggest coping strategies, self-care tips, or helpful resources.

5. **Relatives Notification:**
   On the other hand, if the machine learning model detects a depression level score greater than or equal to 80%, it initiates the notification process. Care Connect sends a discreet message to the user's designated relatives, such as parents or close friends, informing them about the situation. The message might include a brief note expressing concern for the user's well-being and recommending they check in with the individual.

6. **Timely Intervention:**
   The notification to relatives ensures that a support network is aware of the user's potential emotional struggle. Timely intervention by concerned relatives can help provide additional care, empathy, and professional assistance if needed.

By employing this feature, Care Connect ensures that users receive appropriate support and resources tailored to their emotional state. The chatbot offers immediate consolation and helpful guidance to those experiencing lower levels of depression, while the notification system proactively involves the user's support network to assist those facing higher levels of depression, potentially preventing critical situations and promoting mental health well-being.


## Security and Privacy

1. **Real-time Analysis:**
   As you interact with the extension and input lines, the machine learning model immediately analyzes each line for depression detection. The process happens in real-time and is not stored in any form.

2. **Data Deletion:**
   Once the distress level is predicted and any necessary actions (such as chatbot interaction or relative notifications) are performed, all textual data used for the analysis is immediately and permanently deleted from our system. We do not retain any identifiable user data.


## Future Scope

1. **Multilingual Support:**
   Expanding the extension's capabilities to support multiple languages, enabling users from diverse linguistic backgrounds to benefit from the emotional support and resources provided.

2. **Enhanced Chatbot Intelligence:**
   Improving the chatbot's natural language understanding and response generation to make it more empathetic and conversational, enhancing the user's emotional support experience.

3. **Personalized User Profiles:**
   Implementing user profiles to enable personalized interactions with the extension. The profiles can store user preferences and tailor responses based on individual needs and emotional states.

4. **Community Support and Forums:**
   Introducing a community support feature where users can connect with others facing similar challenges, fostering a sense of belonging and mutual support.

5. **Integration with Professional Help Services:**
   Collaborating with mental health organizations to provide users with direct access to professional help services within the extension.

6. **Smart Notifications:**
   Implementing smart notification systems to remind users to engage with self-care practices and well-being check-ins at optimal times.

7. **User Feedback and Sentiment Analysis:**
   Gathering user feedback and performing sentiment analysis to continually enhance the extension's performance and understand user needs better.

8. **Accessibility Features:**
   Ensuring the extension is accessible to users with diverse needs, such as incorporating screen reader compatibility and keyboard navigation.

9. **Offline Mode:**
    Exploring the possibility of an offline mode that provides basic support and resources when users do not have internet connectivity.


## Contact Information
- For questions or inquiries or ideas, contact [Pranshu Gupta](mailto:gpranshu482@gmail.com).







