class EightballController < ApplicationController

def input_form
end

def answer

  @reply= ['As I see it, yes.','Ask again later.','Better not tell you now.','Cannot predict now.','Concentrate and ask again.','Do not count on it.','It is certain.','It is decidedly so.','Most likely.','My reply is no.','My sources say no.','Outlook not so good.','Outlook good.','Reply hazy, try again.','Signs point to yes.','Very doubtful.','Without a doubt.','Yes.','Yes definitely.','You may rely on it.'].sample
  # @response= response_options.sample
end

end
