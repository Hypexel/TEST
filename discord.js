import discord
import random

TOKEN = 'MTAyODI0MjU5NDgxNzM5NjgyOQ.G4PIi5.0dQ4t2ZRwzj8PIqdi0pwoHouvXe-6V9qgxkMBM'

client = discord.client()

@client.event
async def on_ready():
	
	print('we have logged in as {0.user}'.format(client))
	
	
	
	client.run(TOKEN)
