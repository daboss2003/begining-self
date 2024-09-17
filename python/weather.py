import requests
import os
import dotenv
from pprint import pprint

dotenv.load_dotenv()

def get_current_weather():
    print("\n*** get Current Weather Conditions ***\n")
    
    City = input("\nPlese enter a city name:\n")


    request_url = f"https://api.openweathermap.org/data/2.5/weather?appid={os.getenv("API_KEY")}&q={City}&units=imperia"

    weather_data = requests.get(request_url).json()
    
    print(f"\ncurrent weather for {weather_data["name"]}")
    print(f"\nThe Temperature is {weather_data["main"]["temp"]}")
    print(f"\nFeels like {weather_data["main"]["feels_like"]} and {weather_data["weather"][0]["description"]}.")
    
if __name__ == "__main__":

    get_current_weather()