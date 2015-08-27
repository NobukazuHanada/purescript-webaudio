module AudioContext where

import Prelude
import Control.Monad.Eff

foreign import data Audio :: !

foreign import data AudioContext :: *
foreign import data Osillator :: *
foreign import data Destination :: *
foreign import data Gain :: *

class AudioNode n

instance osillatorNode :: AudioNode Osillator
instance destinationNode :: AudioNode Destination
instance gainNode :: AudioNode Gain


foreign import createAudioContext :: forall eff. Eff ( audio :: Audio | eff ) AudioContext


foreign import connect :: forall fromNode toNode eff. (AudioNode fromNode, AudioNode toNode) =>
        fromNode
        -> toNode
        -> Eff ( audio :: Audio | eff ) Unit 

-- osillator 
foreign import createOscillator :: forall eff. AudioContext -> Eff ( audio :: Audio | eff ) Osillator 

foreign import start :: forall eff. Osillator -> Eff ( audio :: Audio | eff ) Osillator
foreign import setFrequency :: forall eff. Number -> Osillator -> Eff ( audio :: Audio | eff ) Unit
