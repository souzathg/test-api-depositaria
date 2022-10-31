package depositaria;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class depoTest {

    @Test
    void testParallel() {
        Results results = Runner.path("classpath:depositaria")
                .outputCucumberJson(true)
                .outputJunitXml(true)
                .parallel(3);
        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }

}
