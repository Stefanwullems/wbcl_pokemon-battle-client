import {
  OPPONENT_GOT_ATTACKED,
  OPPONENT_POKEMON_FAINTED
} from "../actions/gameLogic/attack";
import { OPPONENT_SELECTED_POKEMON } from "../actions/pokemon/select-pokemon";

export default function(state = {}, { type, payload }) {
  switch (type) {
    case OPPONENT_GOT_ATTACKED:
    case OPPONENT_SELECTED_POKEMON:
      return JSON.parse(JSON.stringify(payload));
    case OPPONENT_POKEMON_FAINTED:
      return payload;
    default:
      return state;
  }
}
