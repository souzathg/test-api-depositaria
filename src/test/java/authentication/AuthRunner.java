package authentication;

import com.intuit.karate.junit5.Karate;

class AuthRunner {

    @Karate.Test
    Karate testUsers() {
        return Karate.run("auth").relativeTo(getClass());
    }

}
