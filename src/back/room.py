import uuid
from enum import Enum

class VoteState(Enum):
    NOT = 0
    VOTING = 1


class Room:
    def __init__(self):
        self.id = uuid.uuid8()
        self.creator_id
        self.vote_state = VoteState.NOT
        self.curr_story = ""
        self.players = []