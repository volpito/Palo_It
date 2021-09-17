class V1::ThingsController < ApplicationController
  def index
    render json:{ :things => [
      {
        :name => 'name blabla',
        :guid => 'nbhojpmlk,njbhuoijknjbkhli'
      }
    ] }.to_json
  end
end
