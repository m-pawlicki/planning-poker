import uuid
from enum import Enum

class IsHost(Enum):
    NO = 0
    YES = 1


class Player:
    def __init__(self):
        self.id = uuid.uuid8()
        self.creator_flag = IsHost.NO
        self.played_card = ''
        self.room_id = None

class Host(Player):
    def __init__(self):
        super().__init__
        self.creator_flag = IsHost.YES